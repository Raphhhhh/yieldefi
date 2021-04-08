import Vue from 'vue'
import { getSimpleVault } from '~/helpers/ethersHelper'
import curvePools from '~/pools/curvePools'
import yearnVaults from '~/pools/yearnVaults'

const contractAbi = [
  'function balanceOf(address) view returns (uint)',
  'function getPricePerFullShare() view returns (uint)',
]
const curveContractAbi = [
  'function get_virtual_price() view external returns (uint)',
]
const curveDecimals = 18

async function _yearnBasedFetch(ctx, contract, curveContract, name) {
  const request = await getSimpleVault(
    [
      contract,
      contractAbi,
      'balanceOf',
      [ctx.rootState.ethers.address],
      curveDecimals,
    ],
    [
      [contract, contractAbi, 'getPricePerFullShare', curveDecimals],
      [curveContract, curveContractAbi, 'get_virtual_price', curveDecimals],
    ]
  )
  ctx.commit('pushUserVault', { ...request, name })
}

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

    const vaults = yearnVaults
      .filter(
        (yv) =>
          (yv.displayName.toLowerCase().includes('usd') ||
            yv.displayName.toLowerCase().includes('3crv') ||
            yv.displayName.toLowerCase().includes('crvib') ||
            yv.displayName.toLowerCase().includes('aave') ||
            yv.displayName.toLowerCase().includes('dai')) &&
          yv.apy &&
          yv.apy.type === 'curve'
      )
      .map((yv) => {
        return {
          name: yv.displayName,
          contractYearn: yv.address,
          contractCurve: curvePools.find(
            (cp) =>
              cp.addresses.lpToken.toLowerCase() ===
              yv.token.address.toLowerCase()
          ).addresses.swap,
        }
      })
    await Promise.allSettled(
      vaults.map((v) =>
        _yearnBasedFetch(ctx, v.contractYearn, v.contractCurve, v.name)
      )
    )
  },
}
