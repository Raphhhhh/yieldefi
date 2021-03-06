<template>
  <vs-row
    v-if="
      getProjectIsLoading(project) ||
      (positionsByKey(project) && positionsByKey(project).length > 0)
    "
    :class="$style.container"
  >
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
      <div :class="$style.title">
        <span>{{ project }}</span>
        <vs-tooltip v-if="project === 'curve'" :class="$style.titleTooltip">
          <i class="bx bx-info-circle"></i>
          <template #tooltip>
            Most of income earned on curve are $crv, which is not peg to fiat.
            Your fiat-based earnings vary when $crv token vary.
          </template>
        </vs-tooltip>
      </div>
      <div v-if="getProjectIsLoading(project)" :class="$style.loading">
        <i class="bx bxs-moon bx-spin"></i>
      </div>
      <div v-else :class="$style.containerWithoutTitle">
        <vs-row>
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
            <position
              v-for="pos in positionsByKey(project)"
              :key="pos.name"
              :position="pos"
              :class="$style.position"
            />
          </vs-col>
        </vs-row>

        <vs-row v-if="!isProjectFullBorrow(project)">
          <vs-col
            vs-type="flex"
            vs-justify="center"
            vs-align="center"
            w="12"
            :class="$style.total"
          >
            <vs-row>
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                w="4"
              >
                {{ project }} total
              </vs-col>
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                w="4"
              >
                {{ fiatFormat(totalInvestedByProject(project)) }}
              </vs-col>
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                w="4"
              >
                {{
                  vueNumberFormat(totalApyByProject(project) * 100, {
                    prefix: '',
                    suffix: '%',
                  })
                }}
              </vs-col>
            </vs-row>
          </vs-col>
        </vs-row>
        <vs-row>
          <vs-col
            vs-type="flex"
            vs-justify="center"
            vs-align="center"
            w="12"
            :class="$style.epoch"
          >
            <vs-row>
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                w="3"
              >
                Income:
              </vs-col>
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                w="3"
              >
                {{ fiatFormat(incomePerProjectPerDay(project)) }}
                /day
              </vs-col>
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                w="3"
              >
                {{ fiatFormat(incomePerProjectPerMonth(project)) }} /month
              </vs-col>
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                w="3"
              >
                {{ fiatFormat(incomePerProjectPerYear(project)) }} /year
              </vs-col>
            </vs-row>
          </vs-col>
        </vs-row>
      </div>
    </vs-col>
  </vs-row>
</template>

<script>
import { mapGetters } from 'vuex'
import Position from '~/components/position'
export default {
  components: {
    Position,
  },
  props: {
    project: {
      default: null,
      type: String,
    },
  },
  computed: {
    ...mapGetters({
      positionsByKey: 'user/getPositionsByKey',
      totalInvestedByProject: 'user/getTotalInvestedByProject',
      totalApyByProject: 'user/getTotalApyByProject',
      incomePerProjectPerDay: 'user/getIncomePerProjectPerDay',
      incomePerProjectPerMonth: 'user/getIncomePerProjectPerMonth',
      incomePerProjectPerYear: 'user/getIncomePerProjectPerYear',
      getProjectIsLoading: 'user/getProjectIsLoading',
      isProjectFullBorrow: 'user/isProjectFullBorrow',
    }),
  },
}
</script>

<style lang="stylus" module>
.container
  margin 0 0 60px 0
  .containerWithoutTitle
    border-left 1px solid $border-color
    border-right 1px solid $border-color
    border-bottom-left-radius  $border-radius
    border-bottom-right-radius  $border-radius
  .title
    text-align left
    padding-left 15px
    border-bottom 3px solid $primary
    font-size 2em
    text-transform capitalize
    font-weight bold
    .titleTooltip
      display inline-block
      font-size 0.6em
  .loading
    padding 20px
    i
      font-size 2.5em
  .position
    border-bottom 2px solid $background
    padding 10px 0
    background-color $border-color
  .total
    color $primary
    padding 10px 0
    text-transform capitalize
    font-weight bold
  .epoch
    background-color $primary
    color $text
    padding 15px 5px
    border-bottom-left-radius  $border-radius
    border-bottom-right-radius  $border-radius
    font-weight bold
</style>
