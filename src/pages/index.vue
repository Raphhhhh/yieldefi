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
        <vs-button gradient size="xl" :class="$style.connect" @click="connect">
          <i class="bx bx-rocket"></i><span>Connect to wallet</span>
        </vs-button>
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
        <div :class="$style.tile">
          <div :class="$style.tileTitle">Income /day</div>
          <div :class="$style.tileValue">
            {{ fiatFormat(getTotalIncomePerDay) }}
          </div>
        </div>
        <div :class="$style.tile">
          <div :class="$style.tileTitle">Income /month</div>
          <div :class="$style.tileValue">
            {{ fiatFormat(getTotalIncomePerMonth) }}
          </div>
        </div>
        <div :class="$style.tile">
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
      address: (state) => state.ethers.address,
    }),
    ...mapGetters({
      projects: 'user/getProjects',
      getTotalInvested: 'user/getTotalInvested',
      getMediumApy: 'user/getMediumApy',
      getTotalIncomePerDay: 'user/getTotalIncomePerDay',
      getTotalIncomePerMonth: 'user/getTotalIncomePerMonth',
      getTotalIncomePerYear: 'user/getTotalIncomePerYear',
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
    async connect() {
      await this.$store.dispatch('ethers/init')
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
  .connect
    margin auto
  .project
    margin-bottom 20px
  .tile
    border 2px solid $secondary
    margin-right 15px
    display inline-block
    padding 10px 20px
    border-radius $border-radius
    text-align left
    .tileTitle
      font-size 0.8em
    .tileValue
      font-size 1.5em
</style>
