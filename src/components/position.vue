<template>
  <vs-row>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="4">
      {{ position.name }}
    </vs-col>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="4">
      ${{ position.invested.toFixed(2) }}
    </vs-col>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="4">
      {{ (position.apy * 100).toFixed(2) }}% apy
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
