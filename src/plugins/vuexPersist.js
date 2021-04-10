import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({ key: 'yieldefi', modules: ['ethers'] }).plugin(store)
}
