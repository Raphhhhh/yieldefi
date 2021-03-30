import Vue from 'vue'
import VueNumberFormat from 'vue-number-format'

Vue.use(VueNumberFormat, {
  prefix: '$ ',
  decimal: ',',
  thousand: '.',
  precision: 2,
})
