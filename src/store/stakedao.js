import Vue from 'vue'
import { getSimpleVault } from '~/helpers/ethersHelper'

const decimals = 18
const stakingContract = '0xfEA5E213bbD81A8a94D0E1eDB09dBD7CEab61e1c'
const stakingContractAbi = [
  'function userInfo(uint256,address) view returns (uint, uint)',
]
const passiveEurContract = '0xCD6997334867728ba14d7922f72c893fcee70e84'
const passiveEurContractAbi = [
  'function getPricePerFullShare() view returns (uint)',
]
const curveCRVEursContract = '0x0Ce6a5fF5217e38315f87032CF90686C96627CAA'
const curveCRVEursContractAbi = [
  'function get_virtual_price() view external returns (uint)',
]

const passive3PoolContract = '0xB17640796e4c27a39AF51887aff3F8DC0daF9567'
const passive3PoolContractAbi = [
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
    const requestsEurs = await getSimpleVault(
      [
        stakingContract,
        stakingContractAbi,
        'userInfo',
        [2, ctx.rootState.ethers.address],
        decimals,
      ],
      [
        [
          passiveEurContract,
          passiveEurContractAbi,
          'getPricePerFullShare',
          decimals,
        ],
        [
          curveCRVEursContract,
          curveCRVEursContractAbi,
          'get_virtual_price',
          decimals,
        ],
      ]
    )
    requestsEurs.invested = ctx.rootGetters['fiat/getXToUsd']({
      currency: 'EUR',
      value: requestsEurs.invested,
    })
    ctx.commit('pushUserVault', { ...requestsEurs, name: 'sdEurs' })

    const requests3Pool = await getSimpleVault(
      [
        stakingContract,
        stakingContractAbi,
        'userInfo',
        [0, ctx.rootState.ethers.address],
        decimals,
      ],
      [
        [
          passive3PoolContract,
          passive3PoolContractAbi,
          'getPricePerFullShare',
          decimals,
        ],
        [
          curveCRV3PoolContract,
          curveCRV3PoolContractAbi,
          'get_virtual_price',
          decimals,
        ],
      ]
    )
    ctx.commit('pushUserVault', { ...requests3Pool, name: 'sd3Pools' })
  },
}
