<template>
  <div :class="$style.container">
    <vs-navbar
      color="#353639"
      fixed
      center-collapsed
      square
      :class="$style.navbar"
    >
      <template #left>
        <div :class="$style.title">Stable income</div>
      </template>
      <template #right>
        <vs-button
          v-if="!isLogged"
          gradient
          :class="$style.connect"
          @click="connect"
        >
          <i class="bx bx-rocket"></i><span>Connect to wallet</span>
        </vs-button>
        <template v-else>
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
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      isLogged: (state) => state.ethers.connected,
      address: (state) => state.ethers.address,
    }),
  },
  methods: {
    connect() {
      this.$store.dispatch('ethers/init')
    },
    disconnect() {
      this.$store.dispatch('ethers/disconnect')
    },
  },
}
</script>

<style lang="stylus">
@import-sanitize
:root
  --vs-primary 91, 60, 196
  --vs-success 23, 201, 100
  --vs-danger 242, 19, 93
  --vs-warn 254, 130, 0
  --vs-dark 36, 33, 69
  --vs-background 30,32,35
  --vs-text 255,255,255
  --vs-gray-1 24,25,28
  --vs-gray-2 20,20,23
  --vs-gray-3 15,16,19
  --vs-gray-4 10,11,14
  --vs-shadow-opacity .3
  --vs-dark 0,0,0
  --vs-background-opacity .6

.vs-button i
  margin-right 5px
body
  font-family Arial, Helvetica, sans-serif
</style>

<style>
body {
  background: rgba(var(--vs-background), 1);
  color: rgba(var(--vs-text), 1);
}
</style>

<style lang="stylus" module>
.container
  .navbar
    text-align center
    .title
      font-size 1.2em
  .content
    width 900px
    margin 44px auto 0 auto
    padding-top 20px
</style>
