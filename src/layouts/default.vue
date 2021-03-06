<template>
  <div :class="$style.container">
    <vs-navbar color="#353639" center-collapsed square :class="$style.navbar">
      <template #left>
        <a :class="$style.title" href="/">
          <img src="~/assets/logodark.png" :class="$style.logo" />
        </a>
      </template>
      <template #right>
        <template v-if="!isLogged">
          <vs-button gradient :class="$style.connect" @click="connect">
            <i class="bx bx-rocket"></i><span>Connect to wallet</span>
          </vs-button>
        </template>
        <template v-else>
          <vs-select
            v-if="fiats && fiats.length > 0"
            v-model="chosenFiat"
            placeholder="Fiat"
            :class="$style.fiat"
          >
            <vs-option v-for="f in fiats" :key="f" :value="f" :label="f">
              {{ f }}
            </vs-option>
          </vs-select>
          <vs-input
            v-if="!getAllProjectsLoadingState"
            v-model="forceAddress"
            placeholder="Spy for an 0x"
          ></vs-input>
          <template v-if="forceAddress">
            <vs-button
              icon
              gradient
              success
              :class="$style.iconButton"
              @click="validateForceAddress"
            >
              <i class="bx bxs-check-circle"></i>
            </vs-button>
            <vs-button
              icon
              gradient
              danger
              :class="$style.iconButton"
              @click="cancelForceAddress"
            >
              <i class="bx bxs-x-circle"></i>
            </vs-button>
          </template>
          <vs-button transparent active warn>{{ address }}</vs-button>
          <vs-button
            gradient
            danger
            :class="$style.connect"
            @click="disconnect"
          >
            <i class="bx bx-rocket"></i><span>Disconnect</span>
          </vs-button>
        </template>
      </template>
    </vs-navbar>

    <div :class="$style.content">
      <Nuxt />
    </div>
    <div :class="$style.footer">
      <div :class="$style.footerContent">
        <div>© {{ year }} yielde.fi</div>
        <div :class="$style.twitter">
          <a href="https://twitter.com/yieldefi" target="_blank">
            <i class="bx bxl-twitter"></i>yieldefi</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      forceAddress: '',
    }
  },
  computed: {
    ...mapState({
      isLogged: (state) => state.ethers.connected,
      address: (state) => state.ethers.address,
      rates: (state) => state.fiat.rates,
    }),
    ...mapGetters({
      fiats: 'fiat/getAllFiats',
      getAllProjectsLoadingState: 'user/getAllProjectsLoadingState',
    }),
    chosenFiat: {
      get() {
        return this.$store.state.fiat.chosenFiat
      },
      set(r) {
        this.$store.commit('fiat/setChosenFiat', r)
      },
    },
    year() {
      return new Date().getFullYear()
    },
  },
  methods: {
    async connect() {
      await this.$store.dispatch('ethers/init')
    },
    disconnect() {
      this.$store.dispatch('ethers/disconnect')
    },
    validateForceAddress() {
      this.$store.commit('ethers/address', this.forceAddress)
    },
    cancelForceAddress() {
      this.forceAddress = ''
      this.$store.dispatch('ethers/connect')
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
</style>
<style lang="stylus">
@import-sanitize

.vs-button i
  margin-right 5px
body
  background $background
  &, & a
    color $text
*
  font-family 'Ubuntu', sans-serif
.smallDigits
  font-size 0.6em
</style>

<style lang="stylus" module>
.container
  .navbar
    text-align center
    background-color $background
    width 1200px
    margin auto
    position relative
    .connect
      font-weight bold
    .title
      padding-top 10px
      .logo
        height 40px
    .iconButton
      i
        margin-right 0
    .fiat
      width 76px
      margin-right 5px
      :global(.vs-select__input)
        min-height 32px
  .content
    width 1200px
    margin 44px auto 0 auto
    padding-top 20px
    min-height 400px
  .footer
    border-top 1px solid $border-color
    padding 25px
    margin-top 50px
    .footerContent
      width 1200px
      margin auto
      .twitter
        vertical-align middle
        a
          text-decoration none
        i
          margin-right 10px
          font-size 0.9em
</style>
