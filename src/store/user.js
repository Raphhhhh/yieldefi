import Vue from 'vue'
export const state = () => ({
  projectsIsLoadingState: {},
  areCryptoVaultsEnabled: true,
})

export const getters = {
  getAllPositions(state, getters, rootState, rootGetters) {
    const result = {
      yearn: rootGetters['yearn/get'],
      stakedao: rootGetters['stakedao/get'],
      harvest: rootGetters['harvest/get'],
      compound: rootGetters['compound/get'],
      cream: rootGetters['cream/get'],
      curve: rootGetters['curve/get'],
      dusd: rootGetters['dusd/get'],
      maker: rootGetters['maker/get'],
      bprotocol: rootGetters['bprotocol/get'],
      aave: rootGetters['aave/get'],
      unit: rootGetters['unit/get'],
    }

    Object.keys(result).map((pos, index) => {
      return (result[pos] = result[pos]
        .filter(
          (p) =>
            p.type === 'borrow' ||
            state.areCryptoVaultsEnabled ||
            (!p.name.toLowerCase().includes('eth') &&
              !p.name.toLowerCase().includes('btc') &&
              p.name !== 'ren')
        )
        .map((original) => {
          const p = { ...original }
          if (p.type === 'borrow' || p.name.toLowerCase().includes('usd')) {
            return p
          } else if (
            (p.name.toLowerCase().includes('btc') || p.name === 'ren') &&
            p.invested > 0
          ) {
            p.invested = rootGetters['tokens/convert']({
              currency: 'bitcoin',
              value: p.invested,
            })
          } else if (p.name.toLowerCase().includes('eth') && p.invested > 0) {
            p.invested = rootGetters['tokens/convert']({
              currency: 'ethereum',
              value: p.invested,
            })
          } else if (p.name.toLowerCase().includes('eur') && p.invested > 0) {
            p.invested = rootGetters['fiat/getXToUsd']({
              currency: 'EUR',
              value: p.invested,
            })
          }
          return p
        }))
    })
    return result
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
      .filter((p) => p.type !== 'borrow')
      .reduce((acc, val) => acc + val.invested, 0)
  },
  getTotalApyByProject: (state, getters) => (key) => {
    return (
      getters
        .getPositionsByKey(key)
        .filter((p) => p.type !== 'borrow')
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
  getTotalIncomePerSec(state, getters) {
    return getters.getTotalIncomePerDay / 24 / 60 / 60
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
  isProjectFullBorrow: (state, getters) => (key) => {
    return (
      getters.getPositionsByKey(key).filter((k) => k.type === 'borrow')
        .length === getters.getPositionsByKey(key).length
    )
  },
}

export const mutations = {
  updateProjectsIsLoadingState(state, { project, isLoading }) {
    Vue.set(state.projectsIsLoadingState, project, isLoading)
  },
  setAreCryptoVaultsEnabled(state, val) {
    state.areCryptoVaultsEnabled = val
  },
}

export const actions = {
  async fetch(ctx) {
    await Promise.allSettled([
      ctx.dispatch('fiat/fetch', null, { root: true }),
      ctx.dispatch('tokens/fetch', null, { root: true }),
    ])
    await Promise.allSettled([
      _fetchProject(ctx, 'yearn'),
      _fetchProject(ctx, 'stakedao'),
      _fetchProject(ctx, 'harvest'),
      _fetchProject(ctx, 'compound'),
      _fetchProject(ctx, 'cream'),
      _fetchProject(ctx, 'curve'),
      _fetchProject(ctx, 'dusd'),
      _fetchProject(ctx, 'maker'),
      _fetchProject(ctx, 'bprotocol'),
      _fetchProject(ctx, 'aave'),
      _fetchProject(ctx, 'unit'),
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
  }
}
