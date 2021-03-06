import Vue from 'vue'
import { getSimpleVault } from '~/helpers/ethersHelper'
import curvePools from '~/pools/curvePools'
import yearnVaults from '~/pools/yearnVaults'

const curvePoolsArray = Object.values(curvePools)

const contractAbi = [
  'function balanceOf(address) view returns (uint)',
  'function getPricePerFullShare() view returns (uint)',
  'function pricePerShare() view returns (uint)',
]
const curveContractAbi = [
  'function get_virtual_price() view external returns (uint)',
]

async function _yearnBasedFetch(
  ctx,
  contract,
  curveContract,
  decimals,
  name,
  type,
  type2
) {
  let multiplier
  switch (type) {
    case 'pricePerShareV1OneMonth':
      multiplier = [[contract, contractAbi, 'getPricePerFullShare', 18]]
      break
    case 'pricePerShareV2OneMonth':
      multiplier = [[contract, contractAbi, 'pricePerShare', decimals]]
      if (curveContract) {
        multiplier = [
          [contract, contractAbi, 'pricePerShare', decimals],
          [curveContract, curveContractAbi, 'get_virtual_price', decimals],
        ]
      }
      break
    case 'curve':
      if (type2 === 'v2') {
        multiplier = [
          [contract, contractAbi, 'pricePerShare', decimals],
          [curveContract, curveContractAbi, 'get_virtual_price', decimals],
        ]
      } else {
        multiplier = [
          [contract, contractAbi, 'getPricePerFullShare', decimals],
          [curveContract, curveContractAbi, 'get_virtual_price', decimals],
        ]
      }

      break
    default:
      multiplier = [[contract, contractAbi, 'getPricePerFullShare', decimals]]
      break
  }
  const request = await getSimpleVault(
    [
      contract,
      contractAbi,
      'balanceOf',
      [ctx.rootState.ethers.address],
      decimals,
    ],
    multiplier
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
    try {
      ctx.commit('resetVaults')
      const vaults = yearnVaults
        .filter(
          (yv) =>
            (yv.displayName.toLowerCase().includes('usd') ||
              yv.displayName.toLowerCase().includes('btc') ||
              yv.displayName.toLowerCase().includes('eth') ||
              yv.displayName.toLowerCase().includes('3crv') ||
              yv.displayName.toLowerCase().includes('crvib') ||
              yv.displayName.toLowerCase().includes('aave') ||
              yv.displayName.toLowerCase().includes('eur') ||
              yv.displayName.toLowerCase().includes('mim') ||
              yv.displayName.toLowerCase() === 'ycrv' ||
              yv.displayName.toLowerCase().includes('dai')) &&
            (yv.apy || yv.displayName === 'crvMIM') &&
            (!yv.apy ||
              yv.apy.type === 'curve' ||
              yv.apy.type === 'pricePerShareV2OneMonth' ||
              yv.apy.type === 'pricePerShareV1OneMonth')
        )
        .map((yv) => {
          return {
            type: yv.apy ? yv.apy.type : 'curve',
            type2: yv.type,
            name: yv.displayName,
            contractYearn: yv.address,
            decimals: yv.decimals,
            contractCurve:
              !yv.apy ||
              yv.apy.type === 'curve' ||
              yv.displayName.toLowerCase().includes('crv')
                ? curvePoolsArray.find(
                    (cp) =>
                      cp &&
                      cp.swap_token.toLowerCase() ===
                        yv.token.address.toLowerCase()
                  )
                  ? curvePoolsArray.find(
                      (cp) =>
                        cp &&
                        cp.swap_token.toLowerCase() ===
                          yv.token.address.toLowerCase()
                    ).swap
                  : yv.token && yv.token.address
                  ? yv.token.address
                  : ''
                : '',
          }
        })

      await Promise.allSettled(
        vaults.map((v) =>
          _yearnBasedFetch(
            ctx,
            v.contractYearn,
            v.contractCurve,
            v.decimals,
            v.name,
            v.type,
            v.type2
          )
        )
      )
    } catch (e) {
      console.log(e)
    }
  },
}
