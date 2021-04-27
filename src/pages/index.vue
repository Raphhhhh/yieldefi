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
          <div :class="$style.tileTitle">Total stables invested</div>
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
        <vs-row>
          <vs-col
            vs-type="flex"
            vs-justify="right"
            vs-align="center"
            w="2"
            offset="10"
            :class="$style.options"
          >
            <vs-switch v-model="areCryptoVaultsEnabled">
              <template #off>Fiat pegged vaults only</template>
              <template #on>BTC/ETH vaults enabled</template>
            </vs-switch>
          </vs-col>
        </vs-row>
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
      <div
        v-if="address && getTotalInvested === 0 && !getAllProjectsLoadingState"
      >
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
    areCryptoVaultsEnabled: {
      get() {
        return this.$store.state.user.areCryptoVaultsEnabled
      },
      set(x) {
        this.$store.commit('user/setAreCryptoVaultsEnabled', x)
      },
    },
  },
  watch: {
    address(a) {
      if (a) {
        this.$store.dispatch('user/fetch')
      }
    },
  },
  async mounted() {
    if (this.$store.state.ethers.address) {
      if (this.$store.state.ethers.address.length < 42) {
        this.$store.dispatch('ethers/disconnect')
      }
      await this.$store.dispatch('ethers/init')
      await this.$store.dispatch('user/fetch')
    }
  },
}
</script>

<style lang="stylus" module>
.container
  text-align center
  .options
    margin-top 40px
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
