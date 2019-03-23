import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import user from './modules/user'
import router from './modules/router'
import tabNav from './modules/tabNav'
import getters from './getters'
// import saveInLocal from './plugin/saveInLocal'


Vue.use(Vuex)

export default new Vuex.Store({
  strict: false,
  state,
  getters,
  mutations,
  actions,
  modules: {
    user,
    router,
    tabNav
  },
  // plugins: [ saveInLocal ]
})
