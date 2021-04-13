export const state = () => ({
  rates: [],
})

export const getters = {
  convert: (state, getters) => (val) => {
    if (
      !state.rates ||
      !state.rates[val.currency] ||
      !state.rates[val.currency].usd
    ) {
      return val.value
    }
    return val.value * state.rates[val.currency].usd
  },
}

export const mutations = {
  setRates(state, r) {
    state.rates = r
  },
}

export const actions = {
  async fetch(ctx) {
    const req = await this.$axios.get(
      'https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=bitcoin,ethereum,curve-dao-token'
    )

    ctx.commit('setRates', req.data)
  },
}
