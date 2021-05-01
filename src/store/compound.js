import Vue from 'vue'
import Compound from '@compound-finance/compound-js'

const assetsToInclude = ['cWBTC', 'cUSDT', 'cUSDC', 'cWBTC2', 'cETH', 'cDAI']

export const state = () => ({
  userVaults: [],
})

export const getters = {
  get(state) {
    return state.userVaults.filter((t) => t.invested !== 0)
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

    const vaults = await _getCompoundData(ctx)
    vaults.forEach((v) => {
      ctx.commit('pushUserVault', v)
    })
  },
}

async function _getCompoundData(ctx) {
  const account = await Compound.api.account({
    addresses: ctx.rootState.ethers.address,
  })

  const vaults = []
  const tempAssets = []
  const cTokenContractAddresses = []
  if (Object.isExtensible(account) && account.accounts) {
    account.accounts.forEach((acc) => {
      acc.tokens.forEach((tok) => {
        cTokenContractAddresses.push(tok.address)
        tempAssets.push({
          name: tok.symbol,
          borrow_balance: Number(tok.borrow_balance_underlying.value),
          supply_balance: Number(tok.supply_balance_underlying.value),
        })
      })
    })
  }
  const cTokenData = await Compound.api.cToken({
    addresses: cTokenContractAddresses,
  })

  cTokenData.cToken.forEach((cToken) => {
    tempAssets.forEach((ass) => {
      if (ass.name === cToken.symbol && assetsToInclude.includes(ass.name)) {
        vaults.push({
          name: ass.name,
          invested: ass.supply_balance,
          apy: Number(cToken.supply_rate.value),
        })
        if (ass.borrow_balance > 0) {
          vaults.push({
            name: ass.name,
            invested: -ass.borrow_balance,
            apy: Number(cToken.borrow_rate.value),
            type: 'borrow',
          })
        }
      }
    })
  })

  return vaults
}
