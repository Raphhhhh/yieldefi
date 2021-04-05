import Vue from 'vue'
import {
  getTokenBalance,
  getMultiplier,
  callMethod,
  getLastMonthBlock,
} from '~/helpers/ethersHelper'
import { getApy } from '~/helpers/formulaHelper'

const crUstContract = '0x51F48b638F82e8765F7a26373A2Cb4CcB10C07af'
const crUstContractAbi = [
  'function supplyRatePerBlock() external view returns (uint)',
  'function balanceOf(address owner) external view returns (uint)',
  'function exchangeRateStored() public view returns (uint)',
]

const crUstDecimals = 8
const ustDecimals = 18

const crUsdcContract = '0x44fbeBd2F576670a6C33f6Fc0B00aA8c5753b322'
const crUsdcContractAbi = [
  'function supplyRatePerBlock() external view returns (uint)',
  'function balanceOf(address owner) external view returns (uint)',
  'function exchangeRateStored() public view returns (uint)',
]
const crUsdcDecimals = 8
const usdcDecimals = 6

const crUsdtContract = '0x797AAB1ce7c01eB727ab980762bA88e7133d2157'
const crUsdtContractAbi = [
  'function supplyRatePerBlock() external view returns (uint)',
  'function balanceOf(address owner) external view returns (uint)',
  'function exchangeRateStored() public view returns (uint)',
]
const crUsdtDecimals = 8
const usdtDecimals = 6

const crDaiContract = '0x92B767185fB3B04F881e3aC8e5B0662a027A1D9f'
const crDaiContractAbi = [
  'function supplyRatePerBlock() external view returns (uint)',
  'function balanceOf(address owner) external view returns (uint)',
  'function exchangeRateStored() public view returns (uint)',
]
const crDaiDecimals = 8
const daiDecimals = 18

const crHusdContract = '0xD692ac3245bb82319A31068D6B8412796eE85d2c'
const crHusdContractAbi = [
  'function supplyRatePerBlock() external view returns (uint)',
  'function balanceOf(address owner) external view returns (uint)',
  'function exchangeRateStored() public view returns (uint)',
]
const crHusdDecimals = 8
const husdDecimals = 8

const crSusdContract = '0x25555933a8246Ab67cbf907CE3d1949884E82B55'
const crSusdContractAbi = [
  'function supplyRatePerBlock() external view returns (uint)',
  'function balanceOf(address owner) external view returns (uint)',
  'function exchangeRateStored() public view returns (uint)',
]
const crSusdDecimals = 8
const susdDecimals = 18

const crYCrvContract = '0x9baF8a5236d44AC410c0186Fe39178d5AAD0Bb87'
const curveYContract = '0x45F783CCE6B7FF23B2ab2D70e416cdb7D6055f51'
const crYCrvContractAbi = [
  'function supplyRatePerBlock() external view returns (uint)',
  'function balanceOf(address owner) external view returns (uint)',
  'function exchangeRateStored() public view returns (uint)',
]
const curveYContractAbi = [
  'function get_virtual_price() view external returns (uint)',
]
const crYCrvDecimals = 8
const YCrvDecimals = 18

const crYYCrvContract = '0x4EE15f44c6F0d8d1136c83EfD2e8E4AC768954c6'
const yearnYContract = '0x5dbcF33D8c2E976c6b560249878e6F1491Bca25c'
const crYYCrvContractAbi = [
  'function supplyRatePerBlock() external view returns (uint)',
  'function balanceOf(address owner) external view returns (uint)',
  'function exchangeRateStored() public view returns (uint)',
]

const yearnYContractAbi = [
  'function getPricePerFullShare() public view returns (uint)',
]

const crYYCrvDecimals = 8
const yearnYDecimals = 18

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
      usdcDecimals,
      {}
    )
    ctx.commit('pushUserVault', { ...usdcVault, name: 'usdc' })

    const ustVault = await _getCreamVault(
      ctx,
      crUstContract,
      crUstContractAbi,
      crUstDecimals,
      ustDecimals,
      {}
    )
    ctx.commit('pushUserVault', { ...ustVault, name: 'ust' })

    const usdtVault = await _getCreamVault(
      ctx,
      crUsdtContract,
      crUsdtContractAbi,
      crUsdtDecimals,
      usdtDecimals,
      {}
    )
    ctx.commit('pushUserVault', { ...usdtVault, name: 'usdt' })

    const daiVault = await _getCreamVault(
      ctx,
      crDaiContract,
      crDaiContractAbi,
      crDaiDecimals,
      daiDecimals,
      {}
    )
    ctx.commit('pushUserVault', { ...daiVault, name: 'dai' })

    const husdVault = await _getCreamVault(
      ctx,
      crHusdContract,
      crHusdContractAbi,
      crHusdDecimals,
      husdDecimals,
      {}
    )
    ctx.commit('pushUserVault', { ...husdVault, name: 'husd' })

    const susdVault = await _getCreamVault(
      ctx,
      crSusdContract,
      crSusdContractAbi,
      crSusdDecimals,
      susdDecimals,
      {}
    )
    ctx.commit('pushUserVault', { ...susdVault, name: 'susd' })

    const yCrvVault = await _getCreamVault(
      ctx,
      crYCrvContract,
      crYCrvContractAbi,
      crYCrvDecimals,
      YCrvDecimals,
      {
        yieldContract: curveYContract,
        yieldContractAbi: curveYContractAbi,
        methodName: 'get_virtual_price',
        decimals: 18,
      }
    )
    ctx.commit('pushUserVault', { ...yCrvVault, name: 'yCrv' })

    const yearnCrvVault = await _getCreamVault(
      ctx,
      crYYCrvContract,
      crYYCrvContractAbi,
      crYYCrvDecimals,
      yearnYDecimals,
      {
        yieldContract: yearnYContract,
        yieldContractAbi: yearnYContractAbi,
        methodName: 'getPricePerFullShare',
        decimals: 18,
      }
    )
    ctx.commit('pushUserVault', { ...yearnCrvVault, name: 'yyCrv' })
  },
}

async function _getCreamVault(
  ctx,
  cTokenContract,
  cTokenContractAbi,
  cTokenDecimals,
  underLyingDecimals,
  { yieldContract, yieldContractAbi, methodName, decimals }
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

  let apyMultiplier = 1
  if (yieldContract) {
    const nowMultiplier = await getMultiplier(
      yieldContract,
      yieldContractAbi,
      methodName,
      decimals
    )
    const OneMonthAgoMultiplier = await getMultiplier(
      yieldContract,
      yieldContractAbi,
      methodName,
      decimals,
      await getLastMonthBlock()
    )
    apyMultiplier = 1 + getApy(nowMultiplier, OneMonthAgoMultiplier, 30)
    console.log('apyMultiplier', apyMultiplier)
  }
  const simpleVault = {
    apy: supplyApy * apyMultiplier,
    invested: underLyingBalance,
  }

  return simpleVault
}
