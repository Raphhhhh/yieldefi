<template>
  <vs-row>
    <vs-col
      type="flex"
      justify="center"
      align="center"
      w="12"
      :class="$style.container"
    >
      <template v-if="!isLogged">
        <vs-button
          v-if="!isLogged"
          gradient
          size="xl"
          :class="$style.connect"
          @click="connect"
        >
          <i class="bx bx-rocket"></i><span>Connect to wallet</span>
        </vs-button>
      </template>
      <div v-else>
        <template v-if="projects && projects.length > 0">
          <div v-for="project in projects" :key="project">
            <div>{{ project }}</div>
            <div v-for="pos in positionsByKey(project)" :key="pos.name">
              {{ pos.name }} : ${{ pos.invested.toFixed(2) }} :
              {{ (pos.apy * 100).toFixed(2) }}% apy
            </div>
          </div>
        </template>
      </div>
    </vs-col>
  </vs-row>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState({
      isLogged: (state) => state.ethers.connected,
      address: (state) => state.ethers.address,
    }),
    ...mapGetters({
      projects: 'user/getProjects',
      positionsByKey: 'user/getPositionsByKey',
    }),
  },
  watch: {
    address(a) {
      if (a) {
        this.$store.dispatch('user/fetch')
      }
    },
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

<style lang="stylus" module>
.container
  text-align center
</style>
