export const state = () => ({
  v1Vaults: [],
  userV1Vaults: [],
})

export const mutations = {
  setV1Vaults(state, v) {
    state.v1Vaults = v
  },
  setUserV1Vaults(state, uv) {
    state.userV1Vaults = uv
  },
}

export const actions = {
  async get(ctx) {
    const req1 = await this.$axios.get('https://vaults.finance/all')
    ctx.commit('setV1Vaults', req1.data)

    if (ctx.rootState.ethers.address) {
      const req2 = await this.$axios.get(
        `https://api.yearn.tools/user/${ctx.rootState.ethers.address}/vaults?statistics=true`
      )
      ctx.commit('setUserV1Vaults', req2.data)
    }
  },
}
