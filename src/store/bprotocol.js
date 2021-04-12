import Vue from 'vue'
import Maker from '@makerdao/dai'
import { McdPlugin } from '@makerdao/dai-plugin-mcd'

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
    const maker = await Maker.create('browser', {
      plugins: [McdPlugin],
      smartContract: {
        addressOverrides: {
          CDP_MANAGER: '0x3f30c2381CD8B917Dd96EB2f1A4F96D91324BBed',
        },
      },
    })

    const manager = maker.service('mcd:cdpManager')
    const proxyAddress = await maker
      .service('proxy')
      .getProxyAddress(ctx.rootState.ethers.address)

    const cdps = await manager.getCdpIds(proxyAddress)
    Promise.allSettled(
      cdps.map((c) => _fetchMakerVault(ctx, maker, manager, c))
    )
  },
}

async function _fetchMakerVault(ctx, maker, manager, cdp) {
  const vault = await manager.getCdp(cdp.id)
  const service = maker.service('mcd:cdpType')

  ctx.commit('pushUserVault', {
    name: vault.ilk,
    invested: -vault.debtValue._amount.toNumber(),
    apy: service.getCdpType(null, vault.ilk).annualStabilityFee,
    type: 'borrow',
  })
}
