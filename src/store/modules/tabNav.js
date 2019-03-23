import { routeHasExist, getRouteById, routeEqual, localSave, localRead} from "@/lib/util";


const state = {
  tabList: JSON.parse(localRead('tabList') || '[]')
}

const getTabListTolocal = tabList => {
  return tabList.map(item => {
    return {
      name: item.name,
      path: item.path,
      meta: item.meta,
      params: item.params,
      query: item.query
    }
  })
}

const mutations = {
  UPDATE_ROUTER (state, route) {
    if (!routeHasExist(state.tabList, route) && route.name !== `login`) {
      // console.log(route);
      state.tabList.push(route)
    }
    localSave('tabList', JSON.stringify(getTabListTolocal(state.tabList)))
  },
  REMOVE_TAB (state, index) {
    state.tabList.splice(index, 1)
    // console.log(state.tabList);
    localSave('tabList', JSON.stringify(getTabListTolocal(state.tabList)))
    
  }
}

const actions = {
  handleRemove ({ commit }, { id, $route }) {
    return new Promise((resolve) => {
      let route = getRouteById(id)
      let index = state.tabList.findIndex(item => {
        return routeEqual(route, item)
      })
      let len = state.tabList.length
      let nextRoute = {}
      if (routeEqual($route, state.tabList[index])) {
        if (index < len - 1) nextRoute = state.tabList[index + 1]
        else nextRoute = state.tabList[index - 1]
      }
      const { name, params, query } = nextRoute || { name: 'home_index' }
      commit('REMOVE_TAB', index)
      resolve({
        name, params, query
      })
    })
  }
}

export default {
  state,
  mutations,
  actions
}