import Vue from 'vue'
import { getSimpleVault } from '~/helpers/ethersHelper'

const contractAbi = [
  'function balanceOf(address) view returns (uint)',
  'function getPricePerFullShare() view returns (uint)',
]
const contract = '0x42600c4f6d84aa4d246a3957994da411fa8a4e1c'
const decimals = 18

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

    const request = await getSimpleVault(
      [
        contract,
        contractAbi,
        'balanceOf',
        [ctx.rootState.ethers.address],
        decimals,
      ],
      [[contract, contractAbi, 'getPricePerFullShare', decimals]]
    )
    ctx.commit('pushUserVault', { ...request, name: 'ibDUSD' })
  },
}
