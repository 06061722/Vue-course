<template>
  <div class="a-menu">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  methods:{},
}
</script>
<style lang="stylus" >
.a-menu 
  *
    list-style none
  ul 
    padding 0
    margin 0
</style>