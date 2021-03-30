import { ethers } from 'ethers'
import { getProvider, getWalletAddress } from '~/helpers/ethersConnect'
import * as addresses from '~/contracts/stakeDaoAddresses'

export const state = () => ({
  threePoolUserBalance: 0,
  eursUserBalance: 0,
  fullPricePerShare: 0,
  virtualPrice: 0,
})

export const getters = {
  get(state, getters, rootState) {
    return {
      threePoolBalance: state.threePoolUserBalance,
      eursBalance: state.eursUserBalance,
      fullPricePerShare: state.fullPricePerShare,
      virtualPrice: state.virtualPrice,
    }
  },
}

export const mutations = {
  setThreePoolBalance(state, v) {
    state.threePoolBalance = v
  },
  setEursBalance(state, b) {
    state.eursUserBalance = b
  },
  setFullPricePerShare(state, pps) {
    state.fullPricePerShare = pps
  },
  setVirtualPrice(state, vp) {
    state.virtualPrice = vp
  },
}

export const actions = {
  async fetch(ctx) {
    await _getBalance(ctx, addresses.stakeContractAddress, 'setEursBalance')
    await _getBalance(
      ctx,
      addresses.stakeContractAddress,
      'setThreePoolBalance',
      1
    )
    await _getFullPricePerShare(ctx)
    await _getVirtualPrice(ctx)
  },
}

async function _getBalance(ctx, contractAddress, stateTarget, poolId = 2) {
  const contract = new ethers.Contract(
    contractAddress,
    addresses.baseAbi,
    getProvider()
  )
  if (contract) {
    const balance = await contract.userInfo(poolId, getWalletAddress())
    ctx.commit(stateTarget, ethers.utils.formatUnits(balance[0], 18))
  }
}

async function _getFullPricePerShare(ctx) {
  let result = 0
  const contract = new ethers.Contract(
    addresses.stakeDaoCurveFiEurssEurContract,
    addresses.baseAbi,
    getProvider()
  )

  if (contract) {
    result = await contract.getPricePerFullShare()
    ctx.commit('setFullPricePerShare', ethers.utils.formatUnits(result, 18))
  }
}

async function _getVirtualPrice(ctx) {
  let result = 0
  const contract = new ethers.Contract(
    addresses.curveFinanceEursCRVEursContract,
    addresses.baseAbi,
    getProvider()
  )

  if (contract) {
    result = await contract.get_virtual_price()
    ctx.commit('setVirtualPrice', ethers.utils.formatUnits(result, 18))
  }
}
