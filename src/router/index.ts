import { createRouter, createWebHistory } from 'vue-router'
import ToursView from '@/views/ToursView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tours',
      component: ToursView
    },
    {
      path: '/drivers',
      name: 'drivers',
      component: () => import('../views/DriversView.vue')
    }
  ]
})

export default router
