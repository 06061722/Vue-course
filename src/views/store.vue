<template>
  <div>
    <a-input v-model="stateValue"/>
    <br><br>
    <button @click="handleChangeAppName">修改appName的值</button>
    <!-- <a-input @input="handleInput"/> -->
    <p>{{stateValue}} --> last letter is {{imputValueLastLetter}}</p>
    <!-- <a-show :content='inputValue'/> -->
    <p>appName: {{ appName }}233</p>
    <br>
    <p>appNameWithVersion :{{ appNameWithVersion }}</p>
    <br>
    <p>userName: {{ userName }} ---> the very firstLetter: {{ firstLetter }}</p>
    <br>
    <p>{{ appVersion }}</p>
    <button @click="changeUserName">修改用户名</button>
    <br><br>
    <button @click="registerModule">动态注册模块</button>
    <p v-for="(li, index) in todoList" :key="index">{{ li }}</p>
  </div>
</template>

<script>
import AInput from "_c/AInput.vue";
import AShow from "_c/AShow.vue";

import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

// import { mapState } from "vuex";
export default {
  name: "store",
  components: {
    AInput,
    AShow
  },
  data() {
    return {
      inputValue: ""
    };
  },
  computed: {
    ...mapState({
      appName: state => state.appName,
      // userName: state => state.userName
      appVersion: state => state.appVersion,
      todoList: state => state.todo ? state.todo.todoList : [],
      // stateValue: state => state.stateValue,
    }),
    stateValue: {
      get () {
        return this.$store.state.stateValue
      },
      set (val) {
        this.SET_STATE_VALUE(val)
      }
    },
    ...mapState(["appName", "appVersion"]),
    imputValueLastLetter() {
      return this.inputValue.substr(-1, 1);
    },
    // appName() {
    //   return this.$store.state.appName
    // },
    userName() {
      return this.$store.state.user.userName;
    },
    ...mapGetters(["appNameWithVersion", "firstLetter"])
    // ...mapGetters('user', ['firstLetter'])
  },
  methods: {
    ...mapMutations(['SET_STATE_VALUE', "SET_APP_NAME", "SET_USER_NAME"]),
    ...mapActions(['updateAppName']),
    // handleInput(val) {
    //   this.inputValue = val
    // }
    handleChangeAppName() {
      // this.$store.commit({
      //   type: 'SET_APP_NAME',
      //   appName: 'newAppName'
      // }),
      // this.SET_APP_NAME("newAppName");
      this.$store.commit("SET_APP_VERSION");
      this.updateAppName()
    },
    changeUserName() {
      this.SET_USER_NAME("vue-course");  
    },
    registerModule() {
      this.$store.registerModule(['todo'], {
        state: {
          todoList: [
            '学习mutatitions',
            '学习actions'
          ]
        }
      })
    },
    handleStateValueChange (val) {
      this.SET_STATE_VALUE(val)
    }
  }
};
</script>
<style lang="stylus" scoped>
</style>