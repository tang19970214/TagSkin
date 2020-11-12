import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/beautyCream',
    name: 'beautyCream',
    component: () => import('../views/product/beautyCream.vue')
  },
  {
    path: '/facialCleanser',
    name: 'facialCleanser',
    component: () => import('../views/product/facialCleanser.vue')
  },
  {
    path: '/facialMask',
    name: 'facialMask',
    component: () => import('../views/product/facialMask.vue')
  },
  {
    path: '/lotion',
    name: 'lotion',
    component: () => import('../views/product/lotion.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router