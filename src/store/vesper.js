import { ethers } from 'ethers'
import Vue from 'vue'
import { getProvider } from '~/helpers/ethersConnect'
import { getSimpleVault } from '~/helpers/ethersHelper'

const contractAbi = [
  'function balanceOf(address) view returns (uint)',
  'function getPricePerShare() view returns (uint)',
  'function name() view returns (string)',
  'function decimals() view returns (uint)',
  'function token() view returns (address)',
]

const underlyingContractAbi = ['function decimals() view returns (uint)']

const vesperContract = '0xd559ba46da65959540405c9c73f51c76c62ec119'
const vesperContractAbi = [
  'function length() view returns (uint)',
  'function at(uint) view returns (address)',
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
    try {
      const vaultRegistry = new ethers.Contract(
        vesperContract,
        vesperContractAbi,
        getProvider()
      )
      const poolsNumber = ethers.utils.formatUnits(
        await vaultRegistry.length(),
        'wei'
      )
      const poolContract = []
      for (let i = 0; i < poolsNumber; i++) {
        poolContract.push(await vaultRegistry.at(i))
      }
      await Promise.allSettled(
        poolContract.map((add) => {
          return get(ctx, add)
        })
      )
    } catch (error) {}
  },
}

async function get(ctx, address) {
  const vaultContract = new ethers.Contract(address, contractAbi, getProvider())

  const name = await vaultContract.name()

  if (
    !name.toLowerCase().includes('usd') &&
    !name.toLowerCase().includes('dai') &&
    !name.toLowerCase().includes('eth') &&
    !name.toLowerCase().includes('btc')
  ) {
    return
  }

  const decimals =
    ethers.utils.formatUnits(await vaultContract.decimals(), 'wei') * 1

  const underlyingContractAddress = await vaultContract.token()

  const underlyingContract = new ethers.Contract(
    underlyingContractAddress,
    underlyingContractAbi,
    getProvider()
  )

  const underlyingDecimals = await underlyingContract.decimals()

  const request = await getSimpleVault(
    [
      address,
      contractAbi,
      'balanceOf',
      [ctx.rootState.ethers.address],
      decimals,
    ],
    [[address, contractAbi, 'getPricePerShare', underlyingDecimals]]
  )

  const vault = { ...request, name }
  ctx.commit('pushUserVault', vault)
}
