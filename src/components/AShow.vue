<template>
  <div>
    <p>AShow: {{content}}</p>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: ''
    }
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