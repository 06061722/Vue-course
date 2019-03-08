<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <h1>{{food}}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      console.log(vm)
    })
  },
  // beforeRouteLeave(to, from, next) {
  //   const leave = confirm('您确定要离开吗？')
  //   if (leave) next()
  //   else next(false)
  // },
  components: {
    HelloWorld
  },
  methods: {
    handleClick(type) {
      if (type === 'back') {
        this.$router.back()
      } else if (type === 'push') {
        const name = 'QiaoQiao'
        this.$router.push({
          
          path: `/argu/${name}`
          // name: 'argu',
          // params: {
          //   name: 'QiaoQiao' 
          // }
          // query: {
          //   name: 'QiaoQiao'
          // }
        })
      }
    }
  }
};
</script>
