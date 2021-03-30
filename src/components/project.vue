<template>
  <vs-row>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
          <div :class="$style.title">{{ project }}</div>
          <position
            v-for="pos in positionsByKey(project)"
            :key="pos.name"
            :position="pos"
          />
        </vs-col>
      </vs-row>
      <vs-row>
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
              offset="4"
            >
              ${{ totalInvestedByProject(project).toFixed(2) }}
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="4">
              {{ (totalApyByProject(project) * 100).toFixed(2) }}% apy
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
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="3">
              Income:
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="3">
              ${{ incomePerProjectPerDay(project).toFixed(2) }} /day
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="3">
              ${{ incomePerProjectPerMonth(project).toFixed(2) }} /month
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="3">
              ${{ incomePerProjectPerYear(project).toFixed(2) }} /year
            </vs-col>
          </vs-row>
        </vs-col>
      </vs-row>
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
    }),
  },
}
</script>

<style lang="stylus" module>
.title
  text-align center
  border-bottom 3px solid #5B3CC4
  margin-bottom 10px
.total
  background-color #5B3CC4
  color white
  padding 5px
.epoch
  border 1px solid #5B3CC4
  color white
  padding 5px
</style>
