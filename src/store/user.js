import Vue from 'vue'
export const state = () => ({
  projectsIsLoadingState: {},
})

export const getters = {
  getAllPositions(state, getters, rootState, rootGetters) {
    return {
      yearn: rootGetters['yearn/get'],
      stakedao: rootGetters['stakedao/get'],
      harvest: rootGetters['harvest/get'],
      compound: rootGetters['compound/get'],
      cream: rootGetters['cream/get'],
      curve: rootGetters['curve/get'],
      dusd: rootGetters['dusd/get'],
    }
  },
  getProjectIsLoading: (state) => (project) => {
    return state.projectsIsLoadingState[project]
  },
  getAllProjectsLoadingState(state) {
    const arr = Object.values(state.projectsIsLoadingState)
    return !arr || arr.length === 0 ? false : arr.some((p) => p)
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

export const mutations = {
  updateProjectsIsLoadingState(state, { project, isLoading }) {
    Vue.set(state.projectsIsLoadingState, project, isLoading)
  },
}

export const actions = {
  async fetch(ctx) {
    await Promise.allSettled([
      _fetchProject(ctx, 'yearn'),
      _fetchProject(ctx, 'stakedao'),
      _fetchProject(ctx, 'harvest'),
      _fetchProject(ctx, 'compound'),
      _fetchProject(ctx, 'cream'),
      _fetchProject(ctx, 'curve'),
      _fetchProject(ctx, 'dusd'),
    ])
  },
}

async function _fetchProject(ctx, project) {
  try {
    ctx.commit('updateProjectsIsLoadingState', { project, isLoading: true })
    await ctx.dispatch(`${project}/fetch`, null, { root: true })
    ctx.commit('updateProjectsIsLoadingState', { project, isLoading: false })
  } catch (e) {
    ctx.commit('updateProjectsIsLoadingState', { project, isLoading: false })
    console.log(e)
  }
}
