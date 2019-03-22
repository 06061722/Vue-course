import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './router'
import store from '@/store'
import { setTitle, setToken, getToken } from "@/lib/util";
import clonedeep from 'clonedeep'

Vue.use(Router)

const router = new Router({
  routes
})

// const HAS_LOGINED = false   

router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  // if (to.name !== 'login') {
  //   if (HAS_LOGINED) next()
  //   else next({ name: 'login' })
  // } else {
  //   if (HAS_LOGINED) next({ name: 'home' })
  //   else next()
  // }
  // const token = getToken()
  // // console.log(token);

  // if (token) {
  //   // console.log(token);

  //   store.dispatch('authorization', token).then(() => {
  //     if (to.name === 'login') next({ name: 'home'})
  //     else next()
  //   }).catch(() => {
  //     setToken('')
  //     next({name: 'login'})
  //   })
  // } else {
  //   if (to.name === 'login') next()
  //   else next({ name: 'login'})
  //   // else next()
  // }

  const token = getToken()
  if (token) {
    if (!store.state.router.hasGetRules) {
      store.dispatch("authorization").then(rules => {
        store.dispatch('concatRoutes', rules).then(routers => {
          // console.log(routers);
          // console.log(routers);
          
          router.addRoutes(clonedeep(routers))
          next({ ...to, replace: true })
        }).catch(err => {
          next({ name: 'login' })
        })
      })
    } else {
      next()
    }
  } else {
    if (to.name === 'login') next()
    else next({ name: 'login' })
  }
})

router.beforeResolve()

router.afterEach((to, from) => {
  // logining = false
})

export default router 