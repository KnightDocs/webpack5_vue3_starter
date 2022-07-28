import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { name: 'Home' },
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: {
          title: '主页'
        }
      }
    ]
  },
  {
    path: '/works',
    redirect: { name: 'Works' },
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Works',
        component: () => import('@/views/Works.vue'),
        meta: {
          title: '作品'
        }
      }
    ]
  },
  {
    path: '/contact',
    redirect: { name: 'Contact' },
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Contact',
        component: () => import('@/views/Contact.vue'),
        meta: {
          title: '联系我'
        }
      }
    ]
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: () => import('@/views/Vuex.vue')
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('@/views/Axios.vue')
  },
  {
    path: '/not-found',
    alias: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../components/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = `Eric - ${to.meta.title}`
  }
  next()
})

export default router
