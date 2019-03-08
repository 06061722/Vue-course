<template>
  <div>{{name}}</div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'JoJo'
    }
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to.name, from.name);
  },
  data(){
    return {
    }
  },
  methods:{},
}
</script>
<style lang="stylus" scoped>
</style>