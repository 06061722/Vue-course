<template>
  <div>
    <!-- <ul @click="handleClick">
      <li  @click.stop="handleClick" v-for="(item, index) in list" :key="`list_item_${index}`">{{item.name}}</li>
    </ul> -->
    <!-- <list :list="list" :render="renderFunc"></list> -->
    <list :list="list" >
      <count-to slot="aa" slot-scope="count" :end-val="count.number"></count-to>
    </list>
  </div>
</template>

<script>
import List from '_c/list'
import CountTo from '_c/count-to'
export default {
  components: {
    List,
    CountTo
  },
  data(){
    return {
      list: [
        { number: 100},
        { number: 45},
        // { name: 'Giao'},
      ]
    }
  },
  methods:{
    handleClick(event) {
      console.log(event);
      
    },
    handleEnd() {
      console.log('ended!');
      
    },
    renderFunc(h, number) {
      // return h('i', {
      //   style: {
      //     color: 'pink',
      //   }
      // }, name)
      return (
        // <CountTo  on-click={this.handleClick}  on-on-animation-end={this.handleEnd} endVal={number} style={{color: 'pink'}}></CountTo>
        <CountTo  nativeOn-click={this.handleClick}  on-on-animation-end={this.handleEnd} endVal={number} style={{color: 'pink'}}></CountTo>

      )
    }
  },
}
</script>
<style lang="stylus" scoped>
</style>