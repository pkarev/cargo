import ToursView from '@/views/ToursView.vue'
import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Tours',
    component: ToursView
  },
  {
    path: '/tour/:id',
    name: 'Tour',
    component: () => import('../views/TourCardView.vue'),
    meta: {
      isHiddenInNav: true
    }
  },
  {
    path: '/drivers',
    name: 'Drivers',
    component: () => import('../views/DriversView.vue')
  },
  {
    path: '/driver/:id',
    name: 'Driver',
    component: () => import('../components/CgDriverCard.vue'),
    meta: {
      isHiddenInNav: true
    }
  }
]
