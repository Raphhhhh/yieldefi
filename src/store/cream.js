import Vue from 'vue'
import {
  getTokenBalance,
  getMultiplier,
  callMethod,
  getLastMonthBlock,
} from '~/helpers/ethersHelper'
import { getApy } from '~/helpers/formulaHelper'
import {
  cUsdcContract,
  cUsdcContractAbi,
  cUsdcDecimals,
} from '~/store/compound'

const genericContractAbi = [
  'function supplyRatePerBlock() external view returns (uint)',
  'function balanceOf(address owner) external view returns (uint)',
  'function exchangeRateStored() public view returns (uint)',
]

const crUstContract = '0x51F48b638F82e8765F7a26373A2Cb4CcB10C07af'
const crUstDecimals = 8
const ustDecimals = 18

const crUsdcContract = '0x44fbeBd2F576670a6C33f6Fc0B00aA8c5753b322'
const crUsdcDecimals = 8
const usdcDecimals = 6

const crUsdtContract = '0x797AAB1ce7c01eB727ab980762bA88e7133d2157'
const crUsdtDecimals = 8
const usdtDecimals = 6

const crDaiContract = '0x92B767185fB3B04F881e3aC8e5B0662a027A1D9f'
const crDaiDecimals = 8
const daiDecimals = 18

const crHusdContract = '0xD692ac3245bb82319A31068D6B8412796eE85d2c'
const crHusdDecimals = 8
const husdDecimals = 8

const crSusdContract = '0x25555933a8246Ab67cbf907CE3d1949884E82B55'
const crSusdDecimals = 8
const susdDecimals = 18

const crYCrvContract = '0x9baF8a5236d44AC410c0186Fe39178d5AAD0Bb87'
const curveYContract = '0x45F783CCE6B7FF23B2ab2D70e416cdb7D6055f51'

const curveYContractAbi = [
  'function get_virtual_price() view external returns (uint)',
]
const crYCrvDecimals = 8
const YCrvDecimals = 18

const crYYCrvContract = '0x4EE15f44c6F0d8d1136c83EfD2e8E4AC768954c6'
const yearnYContract = '0x5dbcF33D8c2E976c6b560249878e6F1491Bca25c'

const yearnYContractAbi = [
  'function getPricePerFullShare() public view returns (uint)',
]

const crYYCrvDecimals = 8
const yearnYDecimals = 18

const cyDaiContract = '0x8e595470ed749b85c6f7669de83eae304c2ec68f'
const cyDaiDecimals = 8

const cyY3CrvContract = '0x7589c9e17bcfce1ccaa1f921196fda177f0207fc'
const cyY3CrvDecimals = 8
const y3CrvDecimals = 18

const cyUsdtContract = '0x48759F220ED983dB51fA7A8C0D2AAb8f3ce4166a'
const cyUsdtDecimals = 8

const cyUsdcContract = '0x76eb2fe28b36b3ee97f3adae0c69606eedb2a37c'
const cyUsdcDecimals = 8

const cySUsdSContract = '0x4e3a36a633f63aee0ab57b5054ec78867cb3c0b8'
const cySusdsDecimals = 8

const cyMusdContract = '0xBE86e8918DFc7d3Cb10d295fc220F941A1470C5c'
const cyMusdDecimals = 8

const cyDusdContract = '0x297d4da727fbc629252845e96538fc46167e453a'
const cyDusdDecimals = 8
const dusdDecimals = 18

const cyEursContract = '0xA8caeA564811af0e92b1E044f3eDd18Fa9a73E4F'
const cyEursDecimals = 8
const eursDecimals = 2

const cySeursContract = '0xCA55F9C4E77f7B8524178583b0f7c798De17fD54'
const cySeursDecimals = 8
const seursDecimals = 8 // not sure

const cyBusdContract = '0x09bDCCe2593f0BEF0991188c25Fb744897B6572d'
const cyBusdDecimals = 8
const busdDecimals = 18

const cyGusdContract = '0xa0e5a19e091bbe241e655997e50da82da676b083'
const cyGusdDecimals = 8
const gusdDecimals = 2

const cyCDaiContract = '0x4F12c9DABB5319A252463E6028CA833f1164d045'
const cyCDaiDecimals = 8
const cDaiDecimals = 8

const cyCusdtContract = '0xBB4B067cc612494914A902217CB6078aB4728E36'
const cyCusdtDecimals = 8
const cUsdtDecimals = 8

const cyCusdcContract = '0x950027632FbD6aDAdFe82644BfB64647642B6C09'
const cyCusdcDecimals = 8

export const state = () => ({
  userVaults: [],
})

export const getters = {
  get(state) {
    return state.userVaults.filter((t) => t.invested > 1)
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
    await Promise.allSettled([
      _fetchCreamVault(
        ctx,
        crUsdcContract,
        genericContractAbi,
        crUsdcDecimals,
        usdcDecimals,
        [],
        'usdc'
      ),

      _fetchCreamVault(
        ctx,
        crUstContract,
        genericContractAbi,
        crUstDecimals,
        ustDecimals,
        [],
        'ust'
      ),

      _fetchCreamVault(
        ctx,
        crUsdtContract,
        genericContractAbi,
        crUsdtDecimals,
        usdtDecimals,
        [],
        'usdt'
      ),

      _fetchCreamVault(
        ctx,
        crDaiContract,
        genericContractAbi,
        crDaiDecimals,
        daiDecimals,
        [],
        'dai'
      ),

      _fetchCreamVault(
        ctx,
        crHusdContract,
        genericContractAbi,
        crHusdDecimals,
        husdDecimals,
        [],
        'husd'
      ),

      _fetchCreamVault(
        ctx,
        crSusdContract,
        genericContractAbi,
        crSusdDecimals,
        susdDecimals,
        [],
        'susd'
      ),

      _fetchCreamVault(
        ctx,
        crYCrvContract,
        genericContractAbi,
        crYCrvDecimals,
        YCrvDecimals,
        {
          yieldContract: curveYContract,
          yieldContractAbi: curveYContractAbi,
          methodName: 'get_virtual_price',
          decimals: 18,
        },
        'yCrv'
      ),

      _fetchCreamVault(
        ctx,
        crYYCrvContract,
        genericContractAbi,
        crYYCrvDecimals,
        yearnYDecimals,
        [
          [yearnYContract, yearnYContractAbi, 'getPricePerFullShare', 18],
          [curveYContract, curveYContractAbi, 'get_virtual_price', 18],
        ],
        'yyCrv'
      ),

      _fetchCreamVault(
        ctx,
        cyDaiContract,
        genericContractAbi,
        cyDaiDecimals,
        daiDecimals,
        [],
        'cyDai'
      ),

      _fetchCreamVault(
        ctx,
        cyY3CrvContract,
        genericContractAbi,
        cyY3CrvDecimals,
        y3CrvDecimals,
        [],
        'cyY3Crv'
      ),

      _fetchCreamVault(
        ctx,
        cyUsdtContract,
        genericContractAbi,
        cyUsdtDecimals,
        usdtDecimals,
        [],
        'cyUsdt'
      ),

      _fetchCreamVault(
        ctx,
        cyUsdcContract,
        genericContractAbi,
        cyUsdcDecimals,
        usdcDecimals,
        [],
        'cyUsdc'
      ),

      _fetchCreamVault(
        ctx,
        cySUsdSContract,
        genericContractAbi,
        cySusdsDecimals,
        susdDecimals,
        [],
        'cySusd'
      ),

      _fetchCreamVault(
        ctx,
        cyMusdContract,
        genericContractAbi,
        cyMusdDecimals,
        8,
        [],
        'cyMusd'
      ),

      _fetchCreamVault(
        ctx,
        cyDusdContract,
        genericContractAbi,
        cyDusdDecimals,
        dusdDecimals,
        [],
        'cyDusd'
      ),

      _fetchCreamVault(
        ctx,
        cyEursContract,
        genericContractAbi,
        cyEursDecimals,
        eursDecimals,
        [],
        'cyEurs'
      ),

      _fetchCreamVault(
        ctx,
        cySeursContract,
        genericContractAbi,
        cySeursDecimals,
        seursDecimals,
        [],
        'cySeurs'
      ),

      _fetchCreamVault(
        ctx,
        cyBusdContract,
        genericContractAbi,
        cyBusdDecimals,
        busdDecimals,
        [],
        'cyBusd'
      ),

      _fetchCreamVault(
        ctx,
        cyGusdContract,
        genericContractAbi,
        cyGusdDecimals,
        gusdDecimals,
        [],
        'cyGusd'
      ),

      _fetchCreamVault(
        ctx,
        cyCDaiContract,
        genericContractAbi,
        cyCDaiDecimals,
        cDaiDecimals,
        [],
        'cyCDai'
      ),

      _fetchCreamVault(
        ctx,
        cyCusdtContract,
        genericContractAbi,
        cyCusdtDecimals,
        cUsdtDecimals,
        [],
        'cyCusdt'
      ),
    ])

    const cyCUsdc = await _fetchCreamVault(
      ctx,
      cyCusdcContract,
      genericContractAbi,
      cyCusdcDecimals,
      cUsdcDecimals,
      [],
      'cycUsdc',
      true
    )

    const CUsdcApy = await _fetchCreamVault(
      ctx,
      cUsdcContract,
      cUsdcContractAbi,
      cUsdcDecimals,
      usdcDecimals,
      [],
      'cycUsdc',
      true
    ).apy
    cyCUsdc.apy += CUsdcApy
    ctx.commit('pushUserVault', { ...cyCUsdc, name: 'cyCUsdc' })
  },
}

async function _fetchCreamVault(
  ctx,
  cTokenContract,
  cTokenContractAbi,
  cTokenDecimals,
  underLyingDecimals,
  multipliers,
  name,
  doNotPush = false
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

  let apyMultiplier = 0
  let nowMultiplier = 1
  if (multipliers) {
    const lastMonthBlock = await getLastMonthBlock()

    nowMultiplier = await multipliers.reduce(async (acc, val) => {
      const y = [...val, null]
      const x = await getMultiplier(...y)
      return (await acc) * x
    }, 1)

    const OneMonthAgoMultiplier = await multipliers.reduce(async (acc, val) => {
      const y = [...val, lastMonthBlock]
      const x = await getMultiplier(...y)
      return (await acc) * x
    }, 1)

    apyMultiplier = getApy(nowMultiplier, OneMonthAgoMultiplier, 30)
  }
  const simpleVault = {
    apy: supplyApy + apyMultiplier,
    invested: underLyingBalance * nowMultiplier,
  }
  if (!doNotPush) {
    ctx.commit('pushUserVault', {
      ...simpleVault,
      name,
    })
  }
  return simpleVault
}
