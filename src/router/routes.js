import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    name: 'home',
    alias: '/home_page',
    component: Home,
    props: route => ({
      food: route.query.food
    }),
    // beforeEnter: (to, from, next) => {
    //   if (from.name === 'login') alert('这是从登陆页来的~')
    //   else alert('不是从登陆页来哦的~')
    //   next()
    // } 

  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    props: {
      food: 'banaan'
    },
    meta: {
      title: '关于'
    }
  },
  {
    path: '/count-to',
    name: 'count-to',
    component: () => import('@/views/count-to.vue'),
    props: true,
  },
  {
    path: '/parent',
    name: parent,
    component: () => import('@/views/parent.vue'),
    children: [
      {
      path: 'child',
      component: () => import('@/views/child.vue')
      }
    ]
  },
  {
    path: '/named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  {
    path: '/main',
    redirect: {
      name: to => '/'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/store',
    component: () => import('@/views/store.vue')
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
]