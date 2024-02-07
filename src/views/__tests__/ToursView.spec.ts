import { describe, it, vi, expect, beforeEach } from 'vitest'
import { flushPromises, shallowMount } from '@vue/test-utils'
import ToursView from '../ToursView.vue'
import CgTours from '../../components/CgTours.vue'
import CgButton from '../../components/CgButton.vue'
import { createPinia, setActivePinia } from 'pinia'

beforeEach(() => {
  setActivePinia(createPinia())
})

describe('ToursView', () => {
  it('renders properly on tour load success', async () => {
    const wrapper = shallowMount(ToursView, {
      global: {
        provide: {
          api: {
            getTours: async () => {
              return Promise.resolve({
                response: []
              })
            }
          }
        }
      }
    })

    await flushPromises()

    expect(wrapper.findComponent(CgTours).exists()).toBeTruthy()
  })

  it('renders properly on tour load error', async () => {
    const wrapper = shallowMount(ToursView, {
      global: {
        provide: {
          api: {
            getTours: async () => {
              return Promise.resolve({
                error: 'test error'
              })
            }
          }
        }
      }
    })

    await flushPromises()

    expect(wrapper.findComponent(CgTours).exists()).toBeFalsy()
    expect(wrapper.text()).includes('An error occurred while loading tours:')
  })

  it('retries to load tours on retry button click', async () => {
    const getTours = vi.fn()
    getTours.mockImplementationOnce(async () => Promise.reject('error'))
    const wrapper = shallowMount(ToursView, {
      global: {
        provide: {
          api: {
            getTours
          }
        }
      }
    })
    await flushPromises()

    expect(getTours).toHaveBeenCalledTimes(1)

    getTours.mockImplementationOnce(async () =>
      Promise.resolve({
        response: []
      })
    )
    const retryButton = await wrapper.findComponent(CgButton)
    await retryButton.trigger('click')
    await flushPromises()

    expect(getTours).toHaveBeenCalledTimes(2)
  })
})
