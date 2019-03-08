import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import { setTitle } from "@/lib/util";

Vue.use(Router)

const router = new Router({
  routes
})

const HAS_LOGINED = true  
   
router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  if (to.name !== 'login') {
    if (HAS_LOGINED) next()
    else next({ name: 'login' })
  } else {
    if (HAS_LOGINED) next({ name: 'home' })
    else next()
  }
})

router.beforeResolve()

router.afterEach((to, from) => {
  // logining = false
})

export default router