<template>
  <vs-row v-if="positionsByKey(project) && positionsByKey(project).length > 0">
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
              {{ vueNumberFormat(totalInvestedByProject(project)) }}
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="4">
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
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="3">
              Income:
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="3">
              {{ fiatFormat(incomePerProjectPerDay(project)) }}
              /day
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="3">
              {{ fiatFormat(incomePerProjectPerMonth(project)) }} /month
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="3">
              {{ fiatFormat(incomePerProjectPerYear(project)) }} /year
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
  font-size 2em
.total
  background-color #5B3CC4
  color white
  padding 5px
.epoch
  background-color #6b50ca
  color white
  padding 5px
</style>
