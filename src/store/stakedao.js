import { ethers } from 'ethers'
import Vue from 'vue'
import { getProvider } from '~/helpers/ethersConnect'
import * as addresses from '~/contracts/stakeDaoAddresses'
import { getLastMonthBlock } from '~/helpers/ethersHelper'
import { getApy } from '~/helpers/formulaHelper'

const stakeDaoVault = {
  sdEurs: 'sdEurs',
  sd3Pools: 'sd3Pools',
}

export const state = () => ({
  balance: {},
  fullPricePerShare: {},
  virtualPrice: {},
  apy: {},
})

export const getters = {
  get(state, getters, rootState, rootGetters) {
    const temp = [
      {
        name: 'sdEurs',
        invested: rootGetters['fiat/getXToUsd']({
          currency: 'EUR',
          value:
            state.balance[stakeDaoVault.sdEurs] *
            state.fullPricePerShare[stakeDaoVault.sdEurs] *
            state.virtualPrice[stakeDaoVault.sdEurs],
        }),
        apy: state.apy[stakeDaoVault.sdEurs],
      },
      {
        name: 'sd3Pools',
        invested:
          state.balance[stakeDaoVault.sd3Pools] *
          state.fullPricePerShare[stakeDaoVault.sd3Pools] *
          state.virtualPrice[stakeDaoVault.sd3Pools],
        apy: state.apy[stakeDaoVault.sd3Pools],
      },
    ]
    return temp.filter((t) => t.invested > 0)
  },
}

export const mutations = {
  setBalance(state, { b, v }) {
    Vue.set(state.balance, v, b)
  },
  setFullPricePerShare(state, { pps, v }) {
    Vue.set(state.fullPricePerShare, v, pps)
  },
  setVirtualPrice(state, { vp, v }) {
    Vue.set(state.virtualPrice, v, vp)
  },
  setApy(state, { apy, v }) {
    Vue.set(state.apy, v, apy)
  },
}

export const actions = {
  async fetch(ctx) {
    await _fetchBalance(
      ctx,
      addresses.stakeContractAddress,
      stakeDaoVault.sdEurs
    )
    await _fetchBalance(
      ctx,
      addresses.stakeContractAddress,
      stakeDaoVault.sd3Pools,
      1
    )

    const [
      sdEursPricePerShareNowPromise,
      sd3PoolsPricePerShareNowPromise,
      sdEursVirtualPriceNowPromise,
      sd3PoolsVirtualPriceNowPromise,
    ] = await Promise.allSettled([
      _getFullPricePerShare(stakeDaoVault.sdEurs),
      _getFullPricePerShare(stakeDaoVault.sd3Pools),
      _getVirtualPrice(stakeDaoVault.sdEurs),
      _getVirtualPrice(stakeDaoVault.sd3Pools),
    ])

    ctx.commit('setFullPricePerShare', {
      pps: sdEursPricePerShareNowPromise.value,
      v: stakeDaoVault.sdEurs,
    })

    ctx.commit('setFullPricePerShare', {
      pps: sd3PoolsPricePerShareNowPromise.value,
      v: stakeDaoVault.sd3Pools,
    })

    ctx.commit('setVirtualPrice', {
      vp: sdEursVirtualPriceNowPromise.value,
      v: stakeDaoVault.sdEurs,
    })

    ctx.commit('setVirtualPrice', {
      vp: sd3PoolsVirtualPriceNowPromise.value,
      v: stakeDaoVault.sd3Pools,
    })

    const sdEursVaultApy = await _getVaultApy(
      stakeDaoVault.sdEurs,
      sdEursPricePerShareNowPromise.value,
      sdEursVirtualPriceNowPromise.value
    )

    ctx.commit('setApy', {
      apy: sdEursVaultApy,
      v: stakeDaoVault.sdEurs,
    })

    const sd3PoolsVaultApy = await _getVaultApy(
      stakeDaoVault.sd3Pools,
      sd3PoolsPricePerShareNowPromise.value,
      sd3PoolsVirtualPriceNowPromise.value
    )
    ctx.commit('setApy', {
      apy: sd3PoolsVaultApy,
      v: stakeDaoVault.sd3Pools,
    })
  },
}

async function _fetchBalance(ctx, contractAddress, vault, poolId = 2) {
  const contract = new ethers.Contract(
    contractAddress,
    addresses.baseAbi,
    getProvider()
  )
  if (contract) {
    const balance = await contract.userInfo(
      poolId,
      ctx.rootState.ethers.address
    )
    ctx.commit('setBalance', {
      b: ethers.utils.formatUnits(balance[0], 18),
      v: vault,
    })
  }
}

async function _getFullPricePerShare(vault, block) {
  let result = 0
  const contractAddress =
    vault === stakeDaoVault.sd3Pools
      ? addresses.stakeDaoCurve3poolsCRVContract
      : addresses.stakeDaoCurveFiEurssEurContract

  const contract = new ethers.Contract(
    contractAddress,
    addresses.baseAbi,
    getProvider()
  )

  if (contract) {
    result = await contract.getPricePerFullShare({
      blockTag: block || 'latest',
    })
    return ethers.utils.formatUnits(result, 18)
  }
}

async function _getVirtualPrice(v) {
  let result = 0
  const contractAddress =
    v === stakeDaoVault.sd3Pools
      ? addresses.curveFinance3PoolContract
      : addresses.curveFinanceEursCRVEursContract

  const contract = new ethers.Contract(
    contractAddress,
    addresses.baseAbi,
    getProvider()
  )

  if (contract) {
    result = await contract.get_virtual_price()
    return ethers.utils.formatUnits(result, 18)
  }
}

async function _getVaultApy(v, pricePerShareNow, virtualPriceNow) {
  const pricePerShareOneMonthAgo = await _getFullPricePerShare(
    v,
    await getLastMonthBlock()
  )

  const virtualPriceOneMonthAgo = await _getVirtualPrice(
    v,
    await getLastMonthBlock()
  )
  const now = pricePerShareNow * virtualPriceNow
  const oneMonthAgo = pricePerShareOneMonthAgo * virtualPriceOneMonthAgo
  const apy = getApy(now, oneMonthAgo)
  return apy
}
