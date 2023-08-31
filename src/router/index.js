import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import ('../views/HomeView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/man',
    name:'man',
    component: () => import ('../views/ManView.vue')
  },
  {
    path: '/women',
    name:'women',
    component: () => import ('../views/WomenView.vue')
  },
  {
    path: '/kid',
    name:'kid',
    component: () => import ('../views/KidView.vue')
  },
  {
    path: '/sign',
    name:'sign',
    component: () => import ('../views/SignView.vue')
  },
  {
    path: '/product',
    name:'product',
    component: () => import ('../views/ProductView.vue')
  },
  {
    path: '/userview',
    name:'userview',
    component: () => import ('../views/UserView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
