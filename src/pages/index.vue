<template>
  <vs-row>
    <vs-col
      vs-type="flex"
      vs-justify="center"
      vs-align="center"
      w="12"
      :class="$style.container"
    >
      <template v-if="!address">
        <landing />
      </template>
      <template v-else-if="projects && projects.length > 0">
        <div :class="$style.tile">
          <div :class="$style.tileTitle">Total invested</div>
          <div :class="$style.tileValue">
            {{ fiatFormat(getTotalInvested) }}
          </div>
        </div>
        <div :class="$style.tile">
          <div :class="$style.tileTitle">Medium APY</div>
          <div :class="$style.tileValue">
            {{
              vueNumberFormat(getMediumApy * 100, {
                prefix: '',
                suffix: '%',
              })
            }}
          </div>
        </div>
        <div :class="[$style.tile, $style.tileInverted]">
          <div :class="$style.tileTitle">Income /day</div>
          <div :class="$style.tileValue">
            {{ fiatFormat(getTotalIncomePerDay) }}
          </div>
        </div>
        <div :class="[$style.tile, $style.tileInverted]">
          <div :class="$style.tileTitle">Income /month</div>
          <div :class="$style.tileValue">
            {{ fiatFormat(getTotalIncomePerMonth) }}
          </div>
        </div>
        <div :class="[$style.tile, $style.tileInverted]">
          <div :class="$style.tileTitle">Income /year</div>
          <div :class="$style.tileValue">
            {{ fiatFormat(getTotalIncomePerYear) }}
          </div>
        </div>
        <vs-row
          v-for="project in projects"
          :key="project"
          :class="$style.project"
        >
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
            <project :project="project" />
          </vs-col>
        </vs-row>
      </template>
      <div v-if="getTotalInvested === 0 && !getAllProjectsLoadingState">
        No stablecoin defi project that yielde.fi handle for now
      </div>
    </vs-col>
  </vs-row>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Project from '~/components/project'
import Landing from '~/components/landing'
export default {
  components: {
    Project,
    Landing,
  },
  computed: {
    ...mapState({
      address: (state) => state.ethers.address,
    }),
    ...mapGetters({
      projects: 'user/getProjects',
      getTotalInvested: 'user/getTotalInvested',
      getMediumApy: 'user/getMediumApy',
      getTotalIncomePerDay: 'user/getTotalIncomePerDay',
      getTotalIncomePerMonth: 'user/getTotalIncomePerMonth',
      getTotalIncomePerYear: 'user/getTotalIncomePerYear',
      getAllProjectsLoadingState: 'user/getAllProjectsLoadingState',
    }),
  },
  watch: {
    address(a) {
      if (a) {
        this.$store.dispatch('user/fetch')
      }
    },
  },
}
</script>

<style lang="stylus" module>
.container
  text-align center
  .project
    margin 30px 0
  .tile
    border 2px solid $primary
    margin-right 15px
    display inline-block
    padding 10px 20px
    border-radius $border-radius
    text-align left
    &.tileInverted
      background $primary
      border-color $primary
    .tileTitle
      font-size 0.8em
    .tileValue
      font-size 1.5em
</style>
