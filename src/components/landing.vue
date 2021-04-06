<template>
  <vs-row>
    <vs-col
      vs-type="flex"
      vs-justify="center"
      vs-align="center"
      w="12"
      :class="$style.container"
    >
      <h1 :class="$style.title">
        How much do you earn from your <strong>stablecoins</strong>?
      </h1>
      <h2 :class="$style.subtitle">
        The simplest way to see your stable passive income on DeFi
      </h2>
      <vs-button gradient size="xl" :class="$style.connect" @click="connect">
        <i class="bx bx-rocket"></i><span>Connect to your metamask wallet</span>
      </vs-button>

      <vs-row :class="$style.tiles" justify="space-around">
        <vs-col vs-type="flex" vs-align="center" w="3" :class="$style.tile">
          <i class="bx bx-money"></i>
          <div>Get detailed invested stablecoins on each project</div>
        </vs-col>
        <vs-col vs-type="flex" vs-align="center" w="3" :class="$style.tile">
          <i class="bx bx-diamond"></i>
          <div>APY and income per day, month and year</div>
        </vs-col>
        <vs-col vs-type="flex" vs-align="center" w="3" :class="$style.tile">
          <i class="bx bx-glasses"></i>
          <div>Spy on any eth address</div>
        </vs-col>
      </vs-row>
      <div :class="$style.projects">
        <h2 :class="$style.projectsTitle">Supported projects:</h2>
        <vs-button
          v-for="project in projects"
          :key="project"
          border
          size="l"
          :class="$style.project"
        >
          {{ project }}
        </vs-button>
      </div>
    </vs-col>
  </vs-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      projects: 'user/getProjects',
    }),
  },
  methods: {
    async connect() {
      await this.$store.dispatch('ethers/init')
    },
  },
}
</script>

<style lang="stylus" module>
.container
  text-align left
  .title
    font-size 3.3em
    font-weight 500
    margin-top 100px
    margin-bottom 0
    strong
      color $primary
      font-weight 700
  .subtitle
    font-weight 200
    font-size 1.5em
    margin-top 0
    color $secondary
  .connect
      margin 100px auto
      font-weight bold

  .tiles
    margin-top 50px
    .tile
      text-align center
      height 120px
      padding 20px
      background-color rgba(255,255,255, 0.1)
      border-radius $border-radius
      div
        font-size 0.9em
      i
        color $primary
        font-size 2em
  .projects
    margin-top 100px
    .projectsTitle
      font-weight 200
      font-size 1em
    .project
      display inline-block
      padding 3px 15px
      text-transform capitalize
      margin-right 40px
      font-size 1.1em
</style>
