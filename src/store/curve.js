import Vue from 'vue'
import { ethers } from 'ethers'
import { GraphQLClient, gql } from 'graphql-request'
import { getProvider } from '~/helpers/ethersConnect'
import pools from '~/pools/curvePools'

const gaugeControllerAddress = '0x2F50D538606Fa9EDD2B11E2446BEb18C9D5846bB'
const gaugeControllerAbi = [
  'function gauge_relative_weight(address) view returns (uint256)',
]

const gaugeAbi = [
  'function balanceOf(address) view returns (uint256)',
  'function totalSupply() view returns (uint256)',
  'function working_supply() view returns (uint256)',
  'function inflation_rate() view returns (uint256)',
]
const swapContractAbi = [
  'function get_virtual_price() view external returns (uint)',
]

export const state = () => ({
  userVaults: [],
})

export const getters = {
  get(state) {
    return state.userVaults.filter((t) => t.invested > 1)
  },
}

export const mutations = {
  resetVaults(state) {
    state.userVaults = []
  },
  pushUserVault(state, vault) {
    const i = state.userVaults.findIndex((uv) => uv.name === vault.name)
    if (i > -1) {
      Vue.set(state.userVaults, i, vault)
    } else {
      state.userVaults.push(vault)
    }
  },
}

export const actions = {
  async fetch(ctx) {
    ctx.commit('resetVaults')
    const crvPriceRequest = await this.$axios.get(
      'https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=curve-dao-token'
    )
    const crvPrice = crvPriceRequest.data['curve-dao-token'].usd
    const wrapper = new GraphQLClient(
      'https://api.thegraph.com/subgraphs/name/protofire/curve-gauges'
    )

    const QUERY = gql`
            {
              gauges(where: { user: "${ctx.rootState.ethers.address.toLowerCase()}"}) {
                id
                user
                gauge
                originalBalance
                originalSupply
                workingBalance
                workingSupply
              }
            }
        `

    let results = await wrapper.request(QUERY, {})
    results = results.gauges

    const gaugeControllerContract = new ethers.Contract(
      gaugeControllerAddress,
      gaugeControllerAbi,
      getProvider()
    )

    for (const gaugeBoost of results) {
      const gaugeContractAddress = gaugeBoost.gauge
      const pool = pools.find(
        (p) =>
          p.addresses &&
          p.addresses.gauge &&
          p.addresses.gauge.toLowerCase() === gaugeContractAddress.toLowerCase()
      )
      if (!pool || pool.referenceAsset !== 'usd') {
        continue
      }
      if (
        gaugeBoost.workingBalance === '0' ||
        gaugeBoost.originalBalance === '0'
      ) {
        continue
      }
      const userBoost =
        gaugeBoost.workingBalance / (0.4 * gaugeBoost.originalBalance)

      const gaugeContract = new ethers.Contract(
        gaugeContractAddress,
        gaugeAbi,
        getProvider()
      )

      const swapContract = new ethers.Contract(
        pool.addresses.swap,
        swapContractAbi,
        getProvider()
      )

      const call = await Promise.allSettled([
        gaugeControllerContract.gauge_relative_weight(gaugeContractAddress),
        gaugeContract.balanceOf(ctx.rootState.ethers.address.toLowerCase()),
        gaugeContract.inflation_rate(),
        gaugeContract.working_supply(),
        gaugeContract.totalSupply(),
        swapContract.get_virtual_price(),
      ])
      const virtualPrice = ethers.utils.formatEther(call[5].value)
      const relativeWeight = ethers.utils.formatEther(call[0].value)
      const inflationRate = ethers.utils.formatEther(call[2].value)
      const workingSupply = ethers.utils.formatEther(call[3].value)
      const rate =
        (((inflationRate * relativeWeight * 31536000) / workingSupply) * 0.4) /
        virtualPrice
      const apy = rate * crvPrice * userBoost

      ctx.commit('pushUserVault', {
        name: pool.name,
        invested:
          parseFloat(ethers.utils.formatUnits(call[1].value, 18)) *
          virtualPrice,
        apy,
      })
    }
  },
}
