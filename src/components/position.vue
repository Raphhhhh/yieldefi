<template>
  <div>
    {{ position.name }} : ${{ position.invested.toFixed(2) }} :
    {{ (position.apy * 100).toFixed(2) }}% apy
  </div>
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
