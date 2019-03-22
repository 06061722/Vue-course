import { routes, routerMap } from '@/router/router'

const state = {
  routers: routes,
  hasGetRules: false
}

const mutations = {
  CONCAT_ROUTES (state, routerList) {
    state.routers = routerList
    state.hasGetRules = true
    // console.log(state.routers);
    
  }
}


const getAccessRouterList = (routes, rules) => {
  return routes.filter(item => {
    if (rules[item.name]) {
      if (item.children) item.children = getAccessRouterList(item.children, rules)
      return true
    } else return false 
  })
}

const actions = {
  concatRoutes ({ commit }, rules) {
    return new Promise((resolve, reject) => {
      try {
        let routerList = []
        if (Object.entries(rules).every(item => item[1])) {
          routerList = routerMap
        } else {
          routerList = getAccessRouterList(routerMap, rules)
        }
        commit('CONCAT_ROUTES', routerList)
        resolve(state.routers)
      } catch (err) {
        reject(err)
      }
    })
  }
}

export default {
  state, 
  mutations,
  actions
}