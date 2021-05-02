<template>
  <vs-row>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="4">
      {{ position.name }}
    </vs-col>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="4">
      <span v-if="position.type === 'borrow'">Borrowed: </span>
      {{ fiatFormat(position.invested) }}
    </vs-col>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="4">
      {{
        position.apy === 0
          ? '-'
          : vueNumberFormat(position.apy * 100, { prefix: '', suffix: '%' })
      }}
    </vs-col>
  </vs-row>
</template>

<script>
export default {
  props: {
    position: {
      default: null,
      type: Object,
    },
  },
}
</script>
