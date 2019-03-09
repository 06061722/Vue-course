<template>
  <div>
    <count-to ref="countTo" :end-val='endVal' @on-animation-end="handleEnd">
      <span slot="left">总点击数：</span>
      <span slot="right">次</span>
    </count-to>
    <button @click="getNumber" >获取数值</button>
    <button @click="updateNumber" >更新值</button>
  </div>
</template>

<script>
import CountTo from '_c/count-to'
export default {
  // name: "count-to",
  components: {
    CountTo
  },
  data(){
    return {
      endVal: 100
    }
  },
  methods:{
    getNumber() {
      this.$refs.countTo.getCount()
    },
    updateNumber() {
      this.endVal += Math.random() * 100
    },
    handleEnd(endVal) {
      console.log('end -> ', endVal);
      
    }
  },
}
</script>
<style lang="stylus" scoped>
</style>