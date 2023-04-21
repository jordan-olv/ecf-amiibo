import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/liste',
      name: 'liste',
      component: () => import('../views/ListeView.vue')
    },
    {
      path: '/amiibo/:tail',
      name: 'amiibo',
      component: () => import('../views/AmiiboView.vue')
    }
  ],
  linkExactActiveClass: "active"
})

export default router
