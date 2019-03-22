<template>
  <svg class="iconfont-svg" aria-hidden="true" :style="style">
    <use :xlink:href="IconName"></use>
  </svg>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 20
    }
  },
  data() {
    return {};
  },
  computed: {
    IconName () {
      return `#icon-${this.icon}`
    },
    style () {
      return {
        fontSize: `${this.size}px`
      }
    }
  },
  methods: {}
};
</script>
<style lang="stylus" scoped>
</style>