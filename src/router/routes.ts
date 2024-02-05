import ToursView from '@/views/ToursView.vue'
import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Tours',
    component: ToursView
  },
  {
    path: '/drivers',
    name: 'Drivers',
    component: () => import('../views/DriversView.vue')
  },
  {
    path: '/tour/:id',
    name: 'Tour',
    component: () => import('../components/CgTourCard.vue'),
    meta: {
      isHiddenInNav: true
    }
  }
]
