import {
  MSGS,
  EVENT_CHANNEL,
  connect,
  event,
  ready,
  getProvider,
  getWallet,
  getWalletAddress,
  getNetName,
  hasEns,
} from '~/helpers/ethersConnect'

export const state = () => ({
  initialized: false,
  connected: false,
  error: null,
  // user is ens or address
  user: '',
  address: '',
  network: '',
  ens: null,
})

export const mutations = {
  initialized(state, value) {
    state.initialized = value
  },
  connected(state, value) {
    state.connected = value
  },
  error(state, value) {
    state.error = value
  },
  user(state, value) {
    state.user = value
  },
  address(state, value) {
    state.address = value
  },
  network(state, value) {
    state.network = value
  },
  ens(state, value) {
    state.ens = value
  },
}

export const actions = {
  async connect(ctx) {
    try {
      const oldAddress = ctx.state.address
      const oldNetwork = ctx.state.network

      const provider = getProvider()
      if (!provider) throw new Error(MSGS.NOT_CONNECTED)

      const wallet = getWallet()
      if (!wallet) throw new Error(MSGS.NO_WALLET)
      const address = await getWalletAddress()
      const network = await getNetName()

      if (network !== oldNetwork || address !== oldAddress) {
        ctx.commit('connected', true)
        ctx.commit('error', null)
        ctx.commit('address', address)
        ctx.commit('user', address)
        ctx.commit('network', network)

        // Other vuex stores can wait for this
        event.$emit(EVENT_CHANNEL, MSGS.ETHERS_VUEX_READY)

        // now check for .eth address too
        if (await hasEns()) {
          console.log('Net supports ENS. Checking...')
          ctx.commit('ens', await provider.lookupAddress(address))
          if (ctx.state.ens) {
            ctx.commit('user', ctx.state.ens)
          }
        }

        provider.on('block', (blockNumber) => {
          console.log('Block mined:', blockNumber)
        })
      }
    } catch (err) {
      ctx.dispatch('disconnect', err)
    }
  },
  disconnect(ctx, err) {
    ctx.commit('connected', false)
    ctx.commit('error', err)
    ctx.commit('address', '')
    ctx.commit('user', '')
    ctx.commit('network', '')
    ctx.commit('ens', null)
  },
  logout(ctx) {
    ctx.commit('address', '')
    ctx.commit('user', '')
    alert('You have been logged out from your Ethereum connection')
  },
  notConnected(ctx) {
    ctx.commit('address', '')
    ctx.commit('user', '')
    alert('You are not connected to the Ethereum network. Metamask is needed.')
  },
  async init(ctx) {
    event.$on(EVENT_CHANNEL, async function (msg) {
      console.log('Ethers event received', msg)
      switch (msg) {
        case MSGS.NOT_READY:
          await ctx.dispatch('disconnect')
          break
        case MSGS.NO_WALLET:
          await ctx.dispatch('logout')
          break
        case MSGS.ACCOUNT_CHANGED:
          await ctx.dispatch('connect')
          break
        case MSGS.NOT_CONNECTED:
          await ctx.dispatch('notConnected')
          break
      }
    })

    if (ready()) {
      await ctx.dispatch('connect')
      event.$emit(EVENT_CHANNEL, MSGS.ETHERS_VUEX_INITIALIZED)
    } else {
      await connect()
    }
    ctx.commit('initialized', true)
  },
}
