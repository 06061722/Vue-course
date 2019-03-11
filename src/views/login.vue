<template>
  <div>
    <input type="text" v-model="userName">
    <input type="password" v-model="password">
    <button @click="handleSubmit">登陆</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["login"]),
    handleSubmit() {
      this.login({
        userName: this.userName,
        password: this.password
      }).then(() => {
        console.log('success');
        
        this.$router.push({
          name: 'home'
        })
      }).catch(error => {
        console.log(error);
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
</style>