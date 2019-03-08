import { getAppName } from '@/api/app.js'

const actions = {
  // updateAppName({ commit }) {
  //   getAppName().then(res => {
  //     const { info: { appName } } = res
  //     commit('SET_APP_NAME', appName)
  //   }).catch(err => {
  //     console.log(err);
  //   }),
  //     console.log(233);
  // }


  async updateAppName({ commit }) {
    try {
      const { info: { appName } } = await getAppName()
      commit('SET_APP_NAME', appName)
    } catch (error) {
      console.log(error);
      
    }

  }

}

export default actions