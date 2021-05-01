import Vue from 'vue'
import { ethers } from 'ethers'
import { getProvider } from '~/helpers/ethersConnect'

const lendingPoolContract = '0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9'
const registryContract = '0x057835Ad21a177dbdd3090bB1CAE03EaCF78Fc6d'

const lendingPoolContractAbi = [
  'function getReserveData(address) view returns (uint,uint,uint,uint,uint)',
]
const registryContractAbi = [
  'function getAllATokens() view returns (tuple(string, address)[])',
  'function getAllReservesTokens() view returns (tuple(string, address)[])',
  'function getUserReserveData(address, address) view returns (uint256, uint256, uint256, uint256, uint256, uint256, uint256, uint40, bool)',
]

const aTokenContractAbi = ['function decimals() view returns (uint)']

export const state = () => ({
  userVaults: [],
})

export const getters = {
  get(state) {
    return state.userVaults
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
      const registry = new ethers.Contract(
        registryContract,
        registryContractAbi,
        getProvider()
      )
      const aTokens = await registry.getAllATokens()
      const reserveTokens = await registry.getAllReservesTokens()
      await Promise.allSettled(
        aTokens.map((aToken, id) => {
          return get(ctx, reserveTokens[id][0], aToken[1], reserveTokens[id][1])
        })
      )
    } catch (e) {
      console.log(e)
    }
  },
}

async function get(ctx, name, aToken, reserveToken) {
  if (
    !name.toLowerCase().includes('usd') &&
    !name.toLowerCase().includes('dai') &&
    !name.toLowerCase().includes('eth') &&
    !name.toLowerCase().includes('btc')
  ) {
    return
  }
  const registry = new ethers.Contract(
    registryContract,
    registryContractAbi,
    getProvider()
  )
  const userReserveData = await registry.getUserReserveData(
    reserveToken,
    ctx.rootState.ethers.address.toLowerCase()
  )
  if (
    ethers.utils.formatUnits(userReserveData[0]) <= 0 &&
    ethers.utils.formatUnits(userReserveData[2]) <= 0
  ) {
    return
  }
  const aTokenContract = new ethers.Contract(
    aToken,
    aTokenContractAbi,
    getProvider()
  )

  const decimals = await aTokenContract.decimals()
  const currentATokenBalance = Number.parseFloat(
    ethers.utils.formatUnits(userReserveData[0], decimals)
  )
  const currentVariableDebt = Number.parseFloat(
    ethers.utils.formatUnits(userReserveData[2], decimals)
  )

  const lendingPool = new ethers.Contract(
    lendingPoolContract,
    lendingPoolContractAbi,
    getProvider()
  )
  const reserveData = await lendingPool.getReserveData(reserveToken)

  if (currentATokenBalance > 0) {
    ctx.commit('pushUserVault', {
      name,
      invested: currentATokenBalance,
      apy: ethers.utils.formatUnits(reserveData[3], 27),
    })
  }

  if (currentVariableDebt > 0) {
    ctx.commit('pushUserVault', {
      name: `Borrowed ${name}`,
      invested: -currentVariableDebt,
      apy: ethers.utils.formatUnits(reserveData[4], 27),
      type: 'borrow',
    })
  }
}
