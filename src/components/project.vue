<template>
  <div>
    <div>{{ project }}</div>
    <position
      v-for="pos in positionsByKey(project)"
      :key="pos.name"
      :position="pos"
    />
  </div>
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
    }),
  },
}
</script>
