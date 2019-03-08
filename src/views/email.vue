<template>
  <div class="eml">
    <button @click="handleClick">按我</button>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$bus);
    
  },
  data(){
    return {
    }
  },
  methods:{
    handleClick () {
      this.$bus.$emit('on-click', 'hello')
    }
  },
}
</script>
<style lang="stylus" scoped>
.eml
  border 1px solid green
</style>