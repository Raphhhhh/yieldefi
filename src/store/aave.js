import Vue from 'vue'
import { ethers } from 'ethers'
import { getTokenBalance } from '~/helpers/ethersHelper'
import { getProvider } from '~/helpers/ethersConnect'

const aDaiTokenContract = '0x028171bca77440897b824ca71d1c56cac55b68a3'
const daiTokenContract = '0x6B175474E89094C44Da98b954EedeAC495271d0F'

const aUsdcTokenContract = '0xBcca60bB61934080951369a648Fb03DF4F96263C'
const usdcTokenContract = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
const usdcDecimals = 6

const aUsdtTokenContract = '0x3Ed3B47Dd13EC9a98b44e6204A523E766B225811'
const usdtTokenContract = '0xdAC17F958D2ee523a2206206994597C13D831ec7'
const usdtDecimals = 6

const aBusdTokenContract = '0xA361718326c15715591c299427c62086F69923D9'
const busdTokenContract = '0x4Fabb145d64652a948d72533023f6E7A623C7C53'

const agusdTokenContract = '0xD37EE7e4f452C6638c96536e68090De8cBcdb583'
const gusdTokenContract = '0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd'
const gusdDecimals = 2

const aSUsdTokenContract = '0x6C5024Cd4F8A59110119C56f8933403A539555EB'
const susdTokenContract = '0x57Ab1ec28D129707052df4dF418D58a2D46d5f51'

const aTusdTokenContract = '0x101cc05f4A51C0319f570d5E146a8C625198e636'
const tusdTokenContract = '0x0000000000085d4780B73119b644AE5ecd22b376'

const aWbtcTokenContract = '0x9ff58f4fFB29fA2266Ab25e75e2A8b3503311656'
const wbtcTokenContract = '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599'

const aWethTokenContract = '0x030bA81f1c18d280636F32af80b9AAd02Cf0854e'
const wethTokenContract = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'

const contractAbi = ['function balanceOf(address) view returns (uint)']
const lendingPoolContract = '0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9'
const lendingPoolContractAbi = [
  'function getReserveData(address) view returns (uint,uint,uint,uint,uint)',
]

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

    const aDai = await GetBalanceAndSupplyApy(
      ctx.rootState.ethers.address,
      aDaiTokenContract,
      daiTokenContract
    )
    ctx.commit('pushUserVault', { ...aDai, name: 'aDai' })

    const aUsdc = await GetBalanceAndSupplyApy(
      ctx.rootState.ethers.address,
      aUsdcTokenContract,
      usdcTokenContract,
      usdcDecimals
    )
    ctx.commit('pushUserVault', { ...aUsdc, name: 'aUsdc' })

    const aUsdt = await GetBalanceAndSupplyApy(
      ctx.rootState.ethers.address,
      aUsdtTokenContract,
      usdtTokenContract,
      usdtDecimals
    )
    ctx.commit('pushUserVault', { ...aUsdt, name: 'aUsdt' })

    const aBusd = await GetBalanceAndSupplyApy(
      ctx.rootState.ethers.address,
      aBusdTokenContract,
      busdTokenContract
    )
    ctx.commit('pushUserVault', { ...aBusd, name: 'aBusd' })

    const aGusd = await GetBalanceAndSupplyApy(
      ctx.rootState.ethers.address,
      agusdTokenContract,
      gusdTokenContract,
      gusdDecimals
    )
    ctx.commit('pushUserVault', { ...aGusd, name: 'aGusd' })

    const aSusd = await GetBalanceAndSupplyApy(
      ctx.rootState.ethers.address,
      aSUsdTokenContract,
      susdTokenContract
    )
    ctx.commit('pushUserVault', { ...aSusd, name: 'aSusd' })

    const aTusd = await GetBalanceAndSupplyApy(
      ctx.rootState.ethers.address,
      aTusdTokenContract,
      tusdTokenContract
    )
    ctx.commit('pushUserVault', { ...aTusd, name: 'aTusd' })

    const aWbtc = await GetBalanceAndSupplyApy(
      ctx.rootState.ethers.address,
      aWbtcTokenContract,
      wbtcTokenContract
    )
    ctx.commit('pushUserVault', { ...aWbtc, name: 'aWbtc' })

    const aWeth = await GetBalanceAndSupplyApy(
      ctx.rootState.ethers.address,
      aWethTokenContract,
      wethTokenContract
    )
    ctx.commit('pushUserVault', { ...aWeth, name: 'aWeth' })
  },
}

async function GetBalanceAndSupplyApy(
  address,
  aTokenContract,
  tokenContract,
  decimals = 18
) {
  const bal = await getTokenBalance(
    aTokenContract,
    contractAbi,
    'balanceOf',
    [address],
    decimals
  )

  const lendingContract = new ethers.Contract(
    lendingPoolContract,
    lendingPoolContractAbi,
    getProvider()
  )
  const reserveDatas = await lendingContract.getReserveData(tokenContract)
  const apy = ethers.utils.formatUnits(reserveDatas[3], 27)
  return {
    invested: bal * 1,
    apy,
  }
}
