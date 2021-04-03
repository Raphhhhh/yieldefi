import Vue from 'vue'

Vue.mixin({
  methods: {
    fiatFormat(val) {
      const chosenFiat = this.$store.state.fiat.chosenFiat
      if (chosenFiat !== 'USD') {
        return this.vueNumberFormat(
          this.$store.getters['fiat/getUsdToX']({
            currency: chosenFiat,
            value: val,
          }),
          {
            prefix: '',
            suffix: ` ${chosenFiat}`,
            decimal: ',',
            thousand: '.',
            precision: 2,
          }
        )
      }
      return this.vueNumberFormat(val, {
        prefix: '$',
        decimal: ',',
        thousand: '.',
        precision: 2,
      })
    },
  },
})
