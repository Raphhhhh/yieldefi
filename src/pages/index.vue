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
            <vs-tooltip :class="$style.autoIncrementSwitch">
              <vs-checkbox v-model="autoIncrementActivated">
                <template #icon>
                  <i class="bx bx-trending-up"></i>
                </template>
              </vs-checkbox>
              <template #tooltip>
                Most project are not compounding every blocks, but X times a
                day. This real-time increase is estimated, and if you refresh
                your page, you won't see the value accrued if the project have
                not harvested yet. Click here to deactivate this feature.
              </template>
            </vs-tooltip>
            <span v-html="fiatFormat(increasingTotalIncome, 5)" />
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

function launchInterval(ctx) {
  if (ctx.interval) {
    clearInterval(ctx.interval)
  }
  ctx.nbIntervalSinceLoad = 0
  ctx.interval = setInterval(() => ctx.nbIntervalSinceLoad++, 100)
}

export default {
  components: {
    Project,
    Landing,
  },
  data() {
    return {
      nbIntervalSinceLoad: 0,
      interval: null,
      autoIncrementActivated: true,
    }
  },
  computed: {
    ...mapState({
      address: (state) => state.ethers.address,
      chosenFiat: (state) => state.fiat.chosenFiat,
    }),
    ...mapGetters({
      projects: 'user/getProjects',
      getTotalInvested: 'user/getTotalInvested',
      getMediumApy: 'user/getMediumApy',
      getTotalIncomePerDay: 'user/getTotalIncomePerDay',
      getTotalIncomePerMonth: 'user/getTotalIncomePerMonth',
      getTotalIncomePerYear: 'user/getTotalIncomePerYear',
      getAllProjectsLoadingState: 'user/getAllProjectsLoadingState',
      getTotalIncomePerSec: 'user/getTotalIncomePerSec',
    }),
    areCryptoVaultsEnabled: {
      get() {
        return this.$store.state.user.areCryptoVaultsEnabled
      },
      set(x) {
        this.$store.commit('user/setAreCryptoVaultsEnabled', x)
      },
    },
    increasingTotalIncome() {
      return (
        this.getTotalInvested +
        (this.getTotalIncomePerSec / 10) * this.nbIntervalSinceLoad
      )
    },
  },
  watch: {
    async address(a) {
      if (a) {
        await this.$store.dispatch('user/fetch')
        launchInterval(this)
      }
    },
    chosenFiat() {
      launchInterval(this)
    },
    areCryptoVaultsEnabled() {
      launchInterval(this)
    },
    autoIncrementActivated(isActive) {
      if (isActive) {
        launchInterval(this)
      } else {
        this.nbIntervalSinceLoad = 0
        clearInterval(this.interval)
        this.interval = null
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
      launchInterval(this)
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
      position relative

    .tileValue
      font-size 1.5em
      .autoIncrementSwitch
        display inline-block
        font-size 0.7em
</style>
