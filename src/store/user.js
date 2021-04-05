export const state = () => ({})

export const getters = {
  getAllPositions(state, getters, rootState, rootGetters) {
    return {
      yearn: rootGetters['yearn/get'],
      stakedao: rootGetters['stakedao/get'],
      harvest: rootGetters['harvest/get'],
      compound: rootGetters['compound/get'],
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
        getters.getTotalInvestedByProject(key) || 0
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
  getTotalInvested(state, getters) {
    return getters.getProjects.reduce((acc, project) => {
      return acc + getters.getTotalInvestedByProject(project)
    }, 0)
  },
  getMediumApy(state, getters) {
    return (
      getters.getProjects.reduce((acc, project) => {
        return (
          acc +
          getters.getTotalInvestedByProject(project) *
            getters.getTotalApyByProject(project)
        )
      }, 0) / getters.getTotalInvested
    )
  },
  getTotalIncomePerDay(state, getters) {
    return getters.getProjects.reduce((acc, project) => {
      return acc + getters.getIncomePerProjectPerDay(project)
    }, 0)
  },
  getTotalIncomePerMonth(state, getters) {
    return getters.getProjects.reduce((acc, project) => {
      return acc + getters.getIncomePerProjectPerMonth(project)
    }, 0)
  },
  getTotalIncomePerYear(state, getters) {
    return getters.getProjects.reduce((acc, project) => {
      return acc + getters.getIncomePerProjectPerYear(project)
    }, 0)
  },
}

export const mutations = {}

export const actions = {
  async fetch(ctx) {
    await Promise.allSettled([
      ctx.dispatch('yearn/fetch', null, { root: true }),
      ctx.dispatch('stakedao/fetch', null, { root: true }),
      ctx.dispatch('harvest/fetch', null, { root: true }),
      ctx.dispatch('compound/fetch', null, { root: true }),
    ])
  },
}
