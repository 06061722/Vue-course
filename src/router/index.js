import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '@/store'
import { setTitle, setToken, getToken } from "@/lib/util";

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
  const token = getToken()
  // console.log(token);
  
  if (token) {
    store.dispatch('authorization', token).then(() => {
      if (to.name === 'login') next({ name: 'home'})
      else next()
    }).catch(() => {
      setToken('')
      next({name: 'login'})
    })
  } else {
    if (to.name === 'login') next()
    // else next({ name: 'login'})
    else next()
  }
})

router.beforeResolve()

router.afterEach((to, from) => {
  // logining = false
})

export default router 