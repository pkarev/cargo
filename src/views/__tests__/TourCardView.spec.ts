import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { flushPromises, shallowMount } from '@vue/test-utils'
import TourCardView from '../TourCardView.vue'
import { createRouter, createWebHistory, Router } from 'vue-router'
import { routes } from '../../router/routes'
import CgTourCard from '../../components/CgTourCard.vue'

let router: Router
beforeEach(async () => {
  setActivePinia(createPinia())

  router = createRouter({
    history: createWebHistory(),
    routes
  })
})

const mockTours: Tour[] = [
  {
    id: 0,
    customer: 'Grosskopf Gruppe',
    shipmentDate: '10/21/2099',
    from: 'Heilbronn',
    to: 'Menden (Sauerland)',
    driver: {
      id: 0,
      name: 'Alea Otte',
      location: 'Bremen'
    }
  }
]

describe('TourCardView', () => {
  describe('tour load success', () => {
    it('renders tour when it exists', async () => {
      await router.push('/tour/0')
      await router.isReady()

      const wrapper = shallowMount(TourCardView, {
        global: {
          provide: {
            api: {
              getTours: async () => {
                return Promise.resolve({
                  response: mockTours
                })
              }
            }
          },
          plugins: [router]
        }
      })

      await flushPromises()

      expect(wrapper.findComponent(CgTourCard).exists()).toBeTruthy()
    })

    it('renders notification when tour is not found', async () => {
      await router.push('/tour/0')
      await router.isReady()

      const wrapper = shallowMount(TourCardView, {
        global: {
          provide: {
            api: {
              getTours: async () => {
                return Promise.resolve({
                  response: []
                })
              }
            }
          },
          plugins: [router]
        }
      })

      await flushPromises()

      expect(wrapper.findComponent(CgTourCard).exists()).toBeFalsy()
      expect(wrapper.text()).includes('Tour is not found')
    })

    it('renders properly on tour load error', async () => {
      await router.push('/tour/0')
      await router.isReady()

      const wrapper = shallowMount(TourCardView, {
        global: {
          provide: {
            api: {
              getTours: async () => {
                return Promise.resolve({
                  error: 'Test error'
                })
              }
            }
          },
          plugins: [router]
        }
      })

      await flushPromises()

      expect(wrapper.findComponent(CgTourCard).exists()).toBeFalsy()
      expect(wrapper.text()).includes('An error occurred while loading tour:')
      expect(wrapper.text()).includes('Test error')
    })
  })
})
