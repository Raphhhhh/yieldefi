import Vue from 'vue'
import {
  getTokenBalance,
  getMultiplier,
  callMethod,
} from '~/helpers/ethersHelper'

const crUstContract = '0x51F48b638F82e8765F7a26373A2Cb4CcB10C07af'
const crUstContractAbi = [
  'function supplyRatePerBlock() external view returns (uint)',
  'function balanceOf(address owner) external view returns (uint)',
  'function exchangeRateStored() public view returns (uint)',
]

const crUstDecimals = 8
const ustDecimals = 6

const crUsdcContract = '0x44fbeBd2F576670a6C33f6Fc0B00aA8c5753b322'
const crUsdcContractAbi = [
  'function supplyRatePerBlock() external view returns (uint)',
  'function balanceOf(address owner) external view returns (uint)',
  'function exchangeRateStored() public view returns (uint)',
]
const crUsdcDecimals = 8
const usdcDecimals = 6

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
    const usdcVault = await _getCreamVault(
      ctx,
      crUsdcContract,
      crUsdcContractAbi,
      crUsdcDecimals,
      usdcDecimals
    )
    ctx.commit('pushUserVault', { ...usdcVault, name: 'usdc' })
  },
}

async function _getCreamVault(
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
