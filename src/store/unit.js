import Vue from 'vue'
import { ethers } from 'ethers'
import { getProvider } from '~/helpers/ethersConnect'
import unitVaults from '~/pools/unitVaults'

const cdpManagerContract = '0x0e13ab042eC5AB9Fc6F43979406088B9028F66fA'
const cdpManagerAbi = [
  'function cdpRegistry() view returns (address)',
  'function vault() view returns (address)',
]

const registryAbi = [
  'function getCdpsByOwner(address) view returns (address[])',
]

const vaultAbi = [
  'function getTotalDebt(address, address) view returns (uint256)',
  'function vaultParameters() view returns (address)',
]

const vaultParametersAbi = [
  'function stabilityFee(address) view returns (uint256)',
]

const usdpDecimals = 18

export const state = () => ({
  userVaults: [],
})

export const getters = {
  get(state) {
    return state.userVaults.filter((t) => t.invested < -1)
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
    const userAddress = ctx.rootState.ethers.address.toLowerCase()
    const cdpManager = new ethers.Contract(
      cdpManagerContract,
      cdpManagerAbi,
      getProvider()
    )
    const cdpManagerResult = await Promise.allSettled([
      cdpManager.cdpRegistry(),
      cdpManager.vault(),
    ])
    const registryContract = cdpManagerResult[0].value
    const vaultContract = cdpManagerResult[1].value

    const registry = new ethers.Contract(
      registryContract,
      registryAbi,
      getProvider()
    )

    const cdps = await registry.getCdpsByOwner(userAddress)
    if (cdps.length <= 0) {
      return
    }
    const vault = new ethers.Contract(vaultContract, vaultAbi, getProvider())
    const vaultParametersContract = await vault.vaultParameters()
    const vaultParameters = new ethers.Contract(
      vaultParametersContract,
      vaultParametersAbi,
      getProvider()
    )

    const debts = await Promise.allSettled(
      cdps.map(async (c) => await vault.getTotalDebt(c, userAddress))
    )

    const stabilityFees = await Promise.allSettled(
      cdps.map(async (c) => await vaultParameters.stabilityFee(c))
    )

    debts.forEach((d, id) => {
      const debt = ethers.utils.formatUnits(d.value, usdpDecimals)
      const stabilityFee = ethers.utils.formatUnits(stabilityFees[id].value, 5)
      const unitVault = unitVaults.find(
        (u) => u.address.toLowerCase() === cdps[id].toLowerCase()
      )
      ctx.commit('pushUserVault', {
        name: unitVault ? unitVault.label : id,
        invested: -debt,
        apy: stabilityFee,
        type: 'borrow',
      })
    })
  },
}
