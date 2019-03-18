import { login, authorization } from '@/api/user'
import { setToken } from '@/lib/util'


const state = {
  userName: 'Qiao',
  rules: {}
}
const getters = {
  firstLetter(state) {
    return state.userName.substr(0, 1)
  }
}
const mutations = {
  SET_USER_NAME(state, params) {
    state.userName = params
  },
  SET_RULES (state, rules) {
    state.rules = rules
  }
}
const actions = {
  updateUserName({ commit, state, rootState, dispatch }) {
    // rootState.appName
  },
  login({ commit }, { userName, password }) {
    // console.log(res);
    return new Promise((resolve, reject) => {
      login({ userName, password }).then(res => {
        // console.log(res);

        if (res.code === 200 && res.data.token) {
          // console.log("233333");
          // console.log(res.data.token);

          setToken(res.data.token)
          resolve()
        } else {
          // console.log("22222");
          reject(new Error('错误'))
        }
      }).catch(err => {
        console.log(err)
      })
    })
  },
  authorization({ commit }, token) {
    return new Promise((resolve, reject) => {
      authorization().then(res => {
        if (parseInt(res.code) === 401) {
          reject(new Error('token error'))
        } else {
          // console.log(res.data.token);

          setToken(res.data.token)
          resolve(res.data.rules.page)
          commit("SET_RULES", res.data.rules.component)
        }
      }).catch(error => {
        reject(error)
      })
    })

  },
  logout() {
    setToken('')
  }
}

export default {
  // namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules: {

  }
}