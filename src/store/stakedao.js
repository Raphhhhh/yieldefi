import { ethers } from 'ethers'
import Vue from 'vue'
import { getProvider } from '~/helpers/ethersConnect'
import * as addresses from '~/contracts/stakeDaoAddresses'
import { getLastMonthBlock } from '~/helpers/ethersHelper'

const stakeDaoVault = {
  sdEurs: 'sdEurs',
  sd3Pools: 'sd3Pools',
}

export const state = () => ({
  balance: {},
  fullPricePerShare: {},
  virtualPrice: {},
})

export const getters = {
  get(state, getters, rootState, rootGetters) {
    return [
      {
        name: 'sdEurs',
        invested: rootGetters['fiatRates/getXToUsd']({
          currency: 'EUR',
          value:
            state.balance[stakeDaoVault.sdEurs] *
            state.fullPricePerShare[stakeDaoVault.sdEurs] *
            state.virtualPrice[stakeDaoVault.sdEurs],
        }),
        apy: 0.69,
      },
      {
        name: 'sd3Pools',
        invested:
          state.balance[stakeDaoVault.sd3Pools] *
          state.fullPricePerShare[stakeDaoVault.sd3Pools] *
          state.virtualPrice[stakeDaoVault.sd3Pools],
        apy: 0.69,
      },
    ]
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

    const pricePerShareNow = await _getFullPricePerShare(
      ctx,
      stakeDaoVault.sdEurs
    )
    ctx.commit('setFullPricePerShare', {
      pps: pricePerShareNow,
      v: stakeDaoVault.sdEurs,
    })

    ctx.commit('setFullPricePerShare', {
      pps: await _getFullPricePerShare(ctx, stakeDaoVault.sd3Pools),
      v: stakeDaoVault.sd3Pools,
    })

    const virtualPriceNow = await _getVirtualPrice(ctx, stakeDaoVault.sdEurs)
    ctx.commit('setVirtualPrice', {
      vp: virtualPriceNow,
      v: stakeDaoVault.sdEurs,
    })
    ctx.commit('setVirtualPrice', {
      vp: await _getVirtualPrice(ctx, stakeDaoVault.sd3Pools),
      v: stakeDaoVault.sd3Pools,
    })

    /* const pricePerShareOneMonthAgo = await _getFullPricePerShare(
      ctx,
      stakeDaoVault.sdEurs,
      await getLastMonthBlock()
    )

    const virtualPriceOneMonthAgo = await _getVirtualPrice(
      ctx,
      stakeDaoVault.sdEurs,
      await getLastMonthBlock()
    )

    const now = pricePerShareNow * virtualPriceNow
    const oneMonthAgo = pricePerShareOneMonthAgo * virtualPriceOneMonthAgo

    const mpr = (now - oneMonthAgo) / oneMonthAgo
    const apr = mpr * 12
    console.log('apr: ' + apr * 100)
    const apy = Math.pow(1 + apr / 12, 12) - 1
    console.log('apy: ' + apy * 100) */
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

async function _getFullPricePerShare(ctx, vault, block) {
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

async function _getVirtualPrice(ctx, v) {
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
