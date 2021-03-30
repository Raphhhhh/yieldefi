export const state = () => ({})

export const getters = {
  getAllPositions(state, getters, rootState, rootGetters) {
    return {
      yearn: rootGetters['yearn/get'],
    }
  },
  getProjects(state, getters) {
    return Object.keys(getters.getAllPositions)
  },
  getPositionsByKey: (state, getters) => (key) => {
    return getters.getAllPositions[key]
  },
}

export const mutations = {}

export const actions = {
  async fetch(ctx) {
    await ctx.dispatch('yearn/fetch', null, { root: true })
  },
}
