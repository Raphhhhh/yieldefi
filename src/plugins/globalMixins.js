import Vue from 'vue'

Vue.mixin({
  methods: {
    fiatFormat(val, decimals = 2) {
      const chosenFiat = this.$store.state.fiat.chosenFiat
      let result
      if (chosenFiat !== 'USD') {
        result = this.vueNumberFormat(
          this.$store.getters['fiat/getUsdToX']({
            currency: chosenFiat,
            value: val,
          }),
          {
            prefix: '',
            suffix: ` ${chosenFiat}`,
            decimal: ',',
            thousand: '.',
            precision: decimals,
          }
        )
      } else {
        result = this.vueNumberFormat(val, {
          prefix: '$',
          decimal: ',',
          thousand: '.',
          precision: decimals,
        })
      }

      if (decimals > 2) {
        const decimalMargin = chosenFiat === 'USD' ? 0 : 4
        result = `${result.slice(
          0,
          result.length - decimals + 2 - decimalMargin
        )}<span class="smallDigits">${result.slice(
          -decimals + 2 - decimalMargin
        )}</span>`
      }

      return result
    },
  },
})
