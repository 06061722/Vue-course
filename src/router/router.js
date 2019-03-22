import Home from '@/views/Home.vue'
import Layout from '@/views/layout.vue'


export const routerMap = [
  {
    path: '/',
    name: 'home',
    // alias: '/home_page',
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'home_index',
        component: Home
      },
      // {
      //   path: '/folder-tree',
      //   component: () => import('@/views/folder-tree/folder-tree.vue')
      // }
    ]
    // props: route => ({
    //   food: route.query.food
    // }),
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
    name: 'count_to',
    component: () => import('@/views/count-to.vue'),
  },
  {
    path: '/menu-page',
    name: 'menu_page',
    component: () => import('@/views/menu-page.vue'),
  },
  {
    path: '/split-pane',
    name: 'split_pane',
    component: () => import('@/views/split-pane.vue'),
  },
  {
    path: '/render-page',
    name: 'render_page',
    component: () => import('@/views/render-page.vue'),
  },
  {
    path: '/upload',
    name: 'upload',
    component: () => import('@/views/upload.vue'),
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('@/views/form.vue'),
  },
  {
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
      path: '/child',
      name: 'child',
      component: () => import('@/views/child.vue')
      }
    ]
  },
  {
    path: '/named_view',
    name: 'named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  {
    path: '/main',
    name: 'main',
    redirect: {
      name: to => '/'
    }
  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import('@/views/login.vue')
  // },
  {
    path: '/store',
    name: 'store',
    component: () => import('@/views/store.vue')
  },
  {
    path: '/icon-page',
    name: 'icon_page',
    component: () => import('@/views/icon-page.vue')
  },
  {
    path: '/optimize',
    name: 'optimize',
    component: () => import('@/views/optimize.vue')
  },
  // {
  //   path: '*',
  //   component: () => import('@/views/error_404.vue')
  // }
]

export const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
]