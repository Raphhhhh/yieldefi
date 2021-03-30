export const state = () => ({})

export const getters = {
  getAllPositions(state, getters, rootState, rootGetters) {
    return {
      yearn: rootGetters['yearn/get'],
      stakedao: rootGetters['stakedao/get'],
    }
  },
  getProjects(state, getters) {
    return Object.keys(getters.getAllPositions)
  },
  getPositionsByKey: (state, getters) => (key) => {
    return getters.getAllPositions[key]
  },
  getTotalInvestedByProject: (state, getters) => (key) => {
    return getters
      .getPositionsByKey(key)
      .reduce((acc, val) => acc + val.invested, 0)
  },
  getTotalApyByProject: (state, getters) => (key) => {
    return (
      getters
        .getPositionsByKey(key)
        .reduce((acc, val) => acc + val.invested * val.apy, 0) /
      getters.getTotalInvestedByProject(key)
    )
  },
  getIncomePerProjectPerDay: (state, getters) => (key) => {
    return (
      getters
        .getPositionsByKey(key)
        .reduce((acc, val) => acc + val.invested * val.apy, 0) / 365
    )
  },
  getIncomePerProjectPerMonth: (state, getters) => (key) => {
    return (
      getters
        .getPositionsByKey(key)
        .reduce((acc, val) => acc + val.invested * val.apy, 0) / 12
    )
  },
  getIncomePerProjectPerYear: (state, getters) => (key) => {
    return getters
      .getPositionsByKey(key)
      .reduce((acc, val) => acc + val.invested * val.apy, 0)
  },
}

export const mutations = {}

export const actions = {
  async fetch(ctx) {
    await Promise.allSettled([
      ctx.dispatch('yearn/fetch', null, { root: true }),
      ctx.dispatch('stakedao/fetch', null, { root: true }),
    ])
  },
}
