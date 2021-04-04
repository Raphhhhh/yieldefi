import Vue from 'vue'
import { getSimpleVault } from '~/helpers/ethersHelper'

const staking3PoolContract = '0x27F12d1a08454402175b9F0b53769783578Be7d9'
const staking3PoolContractAbi = [
  'function balanceOf(address) view returns (uint)',
]

const treePoolContract = '0x71B9eC42bB3CB40F017D8AD8011BE8e384a95fa5'
const treePoolContractAbi = [
  'function getPricePerFullShare() view returns (uint)',
]
const curveCRV3PoolContract = '0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7'
const curveCRV3PoolContractAbi = [
  'function get_virtual_price() view external returns (uint)',
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
    const requests3Pool = await getSimpleVault(
      [
        staking3PoolContract,
        staking3PoolContractAbi,
        'balanceOf',
        [ctx.rootState.ethers.address],
      ],
      [
        [treePoolContract, treePoolContractAbi, 'getPricePerFullShare'],
        [curveCRV3PoolContract, curveCRV3PoolContractAbi, 'get_virtual_price'],
      ]
    )
    ctx.commit('pushUserVault', { ...requests3Pool, name: '3crv' })
  },
}
