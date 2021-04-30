import Vue from 'vue'
import { getSimpleVault } from '~/helpers/ethersHelper'

const decimals = 18

const stakingContractAbi = [
  'function userInfo(uint256,address) view returns (uint, uint)',
]

const stakeDaoContractAbi = [
  'function getPricePerFullShare() view returns (uint)',
]

const curveContractAbi = [
  'function get_virtual_price() view external returns (uint)',
]

const stakingContract = '0xfEA5E213bbD81A8a94D0E1eDB09dBD7CEab61e1c'
const eurContract = '0xCD6997334867728ba14d7922f72c893fcee70e84'
const threePoolContract = '0xB17640796e4c27a39AF51887aff3F8DC0daF9567'
const btcContract = '0x24129B935AfF071c4f0554882C0D9573F4975fEd'
const curveCRVEursContract = '0x0Ce6a5fF5217e38315f87032CF90686C96627CAA'
const curveCRV3PoolContract = '0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7'
const curveCRVBtcContract = '0x7fC77b5c7614E1533320Ea6DDc2Eb61fa00A9714'

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
    const requestsEurs = await getSimpleVault(
      [
        stakingContract,
        stakingContractAbi,
        'userInfo',
        [2, ctx.rootState.ethers.address],
        decimals,
      ],
      [
        [eurContract, stakeDaoContractAbi, 'getPricePerFullShare', decimals],
        [curveCRVEursContract, curveContractAbi, 'get_virtual_price', decimals],
      ]
    )

    ctx.commit('pushUserVault', { ...requestsEurs, name: 'sdEurs' })

    const requests3Pool = await getSimpleVault(
      [
        stakingContract,
        stakingContractAbi,
        'userInfo',
        [1, ctx.rootState.ethers.address],
        decimals,
      ],
      [
        [
          threePoolContract,
          stakeDaoContractAbi,
          'getPricePerFullShare',
          decimals,
        ],
        [
          curveCRV3PoolContract,
          curveContractAbi,
          'get_virtual_price',
          decimals,
        ],
      ]
    )
    ctx.commit('pushUserVault', { ...requests3Pool, name: 'sd3Pools' })

    const requestsBtc = await getSimpleVault(
      [
        stakingContract,
        stakingContractAbi,
        'userInfo',
        [3, ctx.rootState.ethers.address],
        decimals,
      ],
      [
        [btcContract, stakeDaoContractAbi, 'getPricePerFullShare', decimals],
        [curveCRVBtcContract, curveContractAbi, 'get_virtual_price', decimals],
      ]
    )
    ctx.commit('pushUserVault', { ...requestsBtc, name: 'sdcrvRenWSBTC' })
  },
}
