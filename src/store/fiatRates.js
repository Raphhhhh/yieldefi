export const state = () => ({
  rates: {},
})

export const getters = {
  getXToUsd: (state, getters) => (val) => {
    if (
      !state.rates ||
      !state.rates.rates ||
      !state.rates.rates[val.currency]
    ) {
      return val.value
    }
    return val.value * (1 / state.rates.rates[val.currency])
  },
  getUsdToX: (state, getters) => (val) => {
    if (
      !state.rates ||
      !state.rates.rates ||
      !state.rates.rates[val.currency]
    ) {
      return val.value
    }
    return val.value * state.rates.rates[val.currency]
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
      'https://api.exchangeratesapi.io/latest?base=USD'
    )
    ctx.commit('setRates', req.data)
  },
}
