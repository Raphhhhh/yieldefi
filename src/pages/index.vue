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
      <template v-else-if="projects && projects.length > 0">
        <project
          v-for="project in projects"
          :key="project"
          :project="project"
          :class="$style.project"
        />
      </template>
    </vs-col>
  </vs-row>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Project from '~/components/project'
export default {
  components: {
    Project,
  },
  computed: {
    ...mapState({
      isLogged: (state) => state.ethers.connected,
      address: (state) => state.ethers.address,
    }),
    ...mapGetters({
      projects: 'user/getProjects',
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
  .project
    margin-bottom 20px
</style>
