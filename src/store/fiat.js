export const state = () => ({
  rates: {},
  chosenFiat: 'USD',
})

export const getters = {
  getXToUsd: (state, getters) => (val) => {
    if (val.currency === 'USD') {
      return val.value
    }
    if (!state.rates || !state.rates[val.currency]) {
      return val.value
    }
    return val.value * (1 / state.rates[val.currency])
  },
  getUsdToX: (state, getters) => (val) => {
    if (val.currency === 'USD') {
      return val.value
    }
    if (!state.rates || !state.rates[val.currency]) {
      return val.value
    }
    return val.value * state.rates[val.currency]
  },
  getAllFiats(state) {
    return Object.keys(state.rates)
  },
}

export const mutations = {
  setRates(state, r) {
    state.rates = r
  },
  setChosenFiat(state, fiat) {
    state.chosenFiat = fiat
  },
}

export const actions = {
  async fetch(ctx) {
    const req = await this.$axios.get(
      'https://api.exchangerate.host/latest?base=USD&symbols=CNY,USD,EUR,JPY,GBP,KRW,INR,CAD,HKD,AUD,TWD,BRL,CHF,RUB'
    )
    ctx.commit('setRates', req.data.rates)
  },
}
