import { ethers } from 'ethers'
import Vue from 'vue'
import { getProvider } from '~/helpers/ethersConnect'
import * as addresses from '~/contracts/stakeDaoAddresses'

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
    await _getBalance(ctx, addresses.stakeContractAddress, stakeDaoVault.sdEurs)
    await _getBalance(
      ctx,
      addresses.stakeContractAddress,
      stakeDaoVault.sd3Pools,
      1
    )
    await _getFullPricePerShare(ctx, stakeDaoVault.sdEurs)
    await _getFullPricePerShare(ctx, stakeDaoVault.sd3Pools)

    await _getVirtualPrice(ctx, stakeDaoVault.sdEurs)
    await _getVirtualPrice(ctx, stakeDaoVault.sd3Pools)
  },
}

async function _getBalance(ctx, contractAddress, vault, poolId = 2) {
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

async function _getFullPricePerShare(ctx, v) {
  let result = 0
  const contractAddress =
    v === stakeDaoVault.sd3Pools
      ? addresses.stakeDaoCurve3poolsCRVContract
      : addresses.stakeDaoCurveFiEurssEurContract

  const contract = new ethers.Contract(
    contractAddress,
    addresses.baseAbi,
    getProvider()
  )

  if (contract) {
    result = await contract.getPricePerFullShare()
    ctx.commit('setFullPricePerShare', {
      pps: ethers.utils.formatUnits(result, 18),
      v,
    })
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
    ctx.commit('setVirtualPrice', {
      vp: ethers.utils.formatUnits(result, 18),
      v,
    })
  }
}
