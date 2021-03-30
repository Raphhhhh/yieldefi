export const state = () => ({
  vaults: [],
  userVaults: [],
})

export const getters = {
  get(state, getters, rootState) {
    if (
      !state.vaults ||
      !state.userVaults ||
      !rootState.ethers.address ||
      state.vaults.length === 0 ||
      state.userVaults.length === 0 ||
      !state.userVaults[rootState.ethers.address.toLowerCase()]
    ) {
      return []
    }
    return state.userVaults[rootState.ethers.address.toLowerCase()]
      .filter(
        (u) =>
          u.label.toLowerCase().includes('usd') ||
          u.label.toLowerCase().includes('3crv') ||
          u.label.toLowerCase().includes('crvib') ||
          u.label.toLowerCase().includes('aave') ||
          u.label.toLowerCase().includes('dai')
      )
      .map((u) => {
        const vault = state.vaults.find(
          (v) => v.address.toLowerCase() === u.address.toLowerCase()
        )
        return {
          name: u.label,
          invested: u.balanceUSD,
          apy: vault.apy.data.netApy,
        }
      })
  },
}

export const mutations = {
  setVaults(state, v) {
    state.vaults = v
  },
  setUserVaults(state, uv) {
    state.userVaults = uv
  },
}

export const actions = {
  async fetch(ctx) {
    const req1 = await this.$axios.get('https://vaults.finance/all')
    ctx.commit('setVaults', req1.data)

    if (ctx.rootState.ethers.address) {
      const req2 = await this.$axios.get(
        `https://api.zapper.fi/v1/balances/yearn?api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241&addresses[]=${ctx.rootState.ethers.address}`
      )
      ctx.commit('setUserVaults', req2.data)
    }
  },
}
