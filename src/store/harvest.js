import Vue from 'vue'
import { getSimpleVault } from '~/helpers/ethersHelper'
import harvestPools from '~/pools/harvestPools'
import harvestVaults from '~/pools/harvestVaults'
import curvePools from '~/pools/curvePools'

const curvePoolsArray = Object.values(curvePools)

// commons
const stakingContractAbi = ['function balanceOf(address) view returns (uint)']
const contractAbi = ['function getPricePerFullShare() view returns (uint)']
const curveContractAbi = [
  'function get_virtual_price() view external returns (uint)',
]

async function _fetch(ctx, stakingContract, contract, name, base) {
  const request = await getSimpleVault(
    [
      stakingContract,
      stakingContractAbi,
      'balanceOf',
      [ctx.rootState.ethers.address],
      base,
    ],
    [[contract, contractAbi, 'getPricePerFullShare', base]]
  )
  ctx.commit('pushUserVault', { ...request, name })
}

async function _fetchCurve(
  ctx,
  stakingContract,
  contract,
  name,
  base,
  curveContract
) {
  const request = await getSimpleVault(
    [
      stakingContract,
      stakingContractAbi,
      'balanceOf',
      [ctx.rootState.ethers.address],
      base,
    ],
    [
      [contract, contractAbi, 'getPricePerFullShare', base],
      [curveContract, curveContractAbi, 'get_virtual_price', base],
    ]
  )
  ctx.commit('pushUserVault', { ...request, name })
}

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
    const vaults = Object.values(harvestPools.eth)
      .filter(
        (h) =>
          (h.id.toLowerCase().includes('usd') ||
            h.id.toLowerCase().includes('ust') ||
            h.id.toLowerCase().includes('btc') ||
            h.id.toLowerCase().includes('eth') ||
            h.id.toLowerCase().includes('3crv') ||
            h.id.toLowerCase().includes('crvib') ||
            h.id.toLowerCase().includes('dai')) &&
          h.id.toLowerCase().includes('farm') &&
          !h.id.toLowerCase().includes('-eth') &&
          !h.id.toLowerCase().includes('klondike') &&
          !h.id.toLowerCase().includes('uni') &&
          !h.id.toLowerCase().includes('1inch') &&
          !h.id.toLowerCase().includes('sushi')
      )
      .map((h) => {
        return {
          name: h.id,
          contract: h.collateralAddress,
          stakingContract: h.contractAddress,
          decimals: h.lpTokenData.decimals,
          curveContract: h.id.toLowerCase().includes('curve')
            ? curvePoolsArray.find(
                (c) =>
                  c.swap_token.toLowerCase() ===
                  harvestVaults
                    .find((v) => v.symbol === h.lpTokenData.symbol)
                    .underlying.address.toLowerCase()
              ).swap
            : null,
        }
      })
    await Promise.allSettled(
      vaults.map((v) =>
        v.curveContract
          ? _fetchCurve(
              ctx,
              v.stakingContract,
              v.contract,
              v.name,
              v.decimals,
              v.curveContract
            )
          : _fetch(ctx, v.stakingContract, v.contract, v.name, v.decimals)
      )
    )
  },
}
