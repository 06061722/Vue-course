<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="getInfo" :style="`background: ${bgcolor}`">请求用户数据</button>
    <img :src="url" alt="">
    <button @click="handleLogout">退出登录</button>
    <h1>{{food}}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { getUserInfo } from '@/api/user'
import { mapActions } from "vuex";
// import axios from "axios";

export default {
  name: "home",
  props: {
    food: {
      type: String,
      default: "apple"
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // console.log(vm);
    });
  },
  // beforeRouteLeave(to, from, next) {
  //   const leave = confirm('您确定要离开吗？')
  //   if (leave) next()
  //   else next(false)
  // },
  components: {
    HelloWorld
  },
  data() {
    return {
      url: '',
      bgcolor: ''
    }
  },
  methods: {
    ...mapActions(['logout']),
    handleClick(type) {
      if (type === "back") {
        this.$router.back();
      } else if (type === "push") {
        const name = "QiaoQiao";
        this.$router.push({
          // path: `/argu/${name}`
          name: "argu",
          params: {
            name: "QiaoQiao"
          }
          // query: {
          //   name: 'QiaoQiao'
          // }
        });
      } else if (type === "replace") {
        this.$router.replace({
          name: "parent"
        });
      }
    },
    getInfo() {
      // axios.post('http://localhost:3001/getUserInfo', { userId: 21 }).then(res => {
      //   console.log(res);
      // })
      getUserInfo({ userId: 21}).then(res => {
        console.log(res);
        this.url = res.data.img_base64
        this.bgcolor = res.data.color
      })
    },
    handleLogout () {
      this.logout()
      this.$router.push({name: 'login'})
    }
  }
};
</script>
