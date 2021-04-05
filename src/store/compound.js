import Vue from 'vue'
import {
  getTokenBalance,
  getMultiplier,
  callMethod,
} from '~/helpers/ethersHelper'

const cDaiContract = '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643'
const cDaiContractAbi = [
  'function supplyRatePerBlock() external view returns (uint)',
  'function balanceOf(address owner) external view returns (uint)',
  'function exchangeRateStored() public view returns (uint)',
]
const cDaiDecimals = 8
const daiDecimals = 18

const cUsdcContract = '0x39aa39c021dfbae8fac545936693ac917d5e7563'
const cUsdcContractAbi = [
  'function supplyRatePerBlock() external view returns (uint)',
  'function balanceOf(address owner) external view returns (uint)',
  'function exchangeRateStored() public view returns (uint)',
]
const cUsdcDecimals = 8
const usdcDecimals = 6

const cUsdtContract = '0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9'
const cUsdtContractAbi = [
  'function supplyRatePerBlock() external view returns (uint)',
  'function balanceOf(address owner) external view returns (uint)',
  'function exchangeRateStored() public view returns (uint)',
]
const cUsdtDecimals = 8
const usdtDecimals = 6

export const state = () => ({
  userVaults: [],
})

export const getters = {
  get(state) {
    return state.userVaults.filter((t) => t.invested > 0)
  },
}

export const mutations = {
  pushUserVault(state, vault) {
    const i = state.userVaults.findIndex((uv) => uv.name === vault.name)
    if (i > -1) {
      Vue.set(state.userVaults, i, vault)
    } else {
      state.userVaults.push(vault)
    }
  },
  resetVaults(state) {
    state.userVaults = []
  },
}

export const actions = {
  async fetch(ctx) {
    ctx.commit('resetVaults')
    const daiVault = await _getCompoundVault(
      ctx,
      cDaiContract,
      cDaiContractAbi,
      cDaiDecimals,
      daiDecimals
    )
    ctx.commit('pushUserVault', { ...daiVault, name: 'dai' })

    const usdcVault = await _getCompoundVault(
      ctx,
      cUsdcContract,
      cUsdcContractAbi,
      cUsdcDecimals,
      usdcDecimals
    )
    ctx.commit('pushUserVault', { ...usdcVault, name: 'usdc' })

    const usdtVault = await _getCompoundVault(
      ctx,
      cUsdtContract,
      cUsdtContractAbi,
      cUsdtDecimals,
      usdtDecimals
    )
    ctx.commit('pushUserVault', { ...usdtVault, name: 'usdt' })
  },
}

async function _getCompoundVault(
  ctx,
  cTokenContract,
  cTokenContractAbi,
  cTokenDecimals,
  underLyingDecimals
) {
  const ethMantissa = 1e18
  const blocksPerDay = 4 * 60 * 24
  const daysPerYear = 365
  const cTokenBalance = await getTokenBalance(
    cTokenContract,
    cTokenContractAbi,
    'balanceOf',
    [ctx.rootState.ethers.address],
    cTokenDecimals
  )
  const cTokenToUnderlyingExchangeRateStored = await getMultiplier(
    cTokenContract,
    cTokenContractAbi,
    'exchangeRateStored',
    0
  )
  const mantissa = 18 + underLyingDecimals - cTokenDecimals
  const oneCTokenInUnderlying =
    cTokenToUnderlyingExchangeRateStored / Math.pow(10, mantissa)
  const underLyingBalance = oneCTokenInUnderlying * cTokenBalance
  const supplyRatePerBlock = await callMethod(
    cTokenContract,
    cTokenContractAbi,
    'supplyRatePerBlock'
  )
  const supplyApy =
    Math.pow(
      (supplyRatePerBlock / ethMantissa) * blocksPerDay + 1,
      daysPerYear
    ) - 1
  const simpleVault = {
    apy: supplyApy,
    invested: underLyingBalance,
  }

  simpleVault.invested = ctx.rootGetters['fiat/getXToUsd']({
    currency: 'USD',
    value: simpleVault.invested,
  })

  return simpleVault
}
