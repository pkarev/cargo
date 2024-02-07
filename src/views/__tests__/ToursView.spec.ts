import { describe, it, vi, expect } from 'vitest'
import { flushPromises, shallowMount } from '@vue/test-utils'
import ToursView from '../ToursView.vue'
import CgTours from '../../components/CgTours.vue'
import CgButton from '../../components/CgButton.vue'

describe('ToursView', () => {
  it('renders properly on tour load success', async () => {
    const wrapper = shallowMount(ToursView, {
      global: {
        provide: {
          api: {
            loadTours: vi.fn().mockImplementation(async () => {
              return Promise.resolve([])
            })
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
            loadTours: vi.fn().mockImplementation(async () => {
              return Promise.resolve({
                error: 'test error'
              })
            })
          }
        }
      }
    })

    await flushPromises()

    expect(wrapper.findComponent(CgTours).exists()).toBeFalsy()
  })

  it('retries to load tours on retry button click', async () => {
    const loadTours = vi.fn()
    loadTours.mockImplementationOnce(async () => Promise.reject('error'))
    const wrapper = shallowMount(ToursView, {
      global: {
        provide: {
          api: {
            loadTours
          }
        }
      }
    })
    await flushPromises()

    expect(loadTours).toHaveBeenCalledTimes(1)

    loadTours.mockImplementationOnce(async () => Promise.resolve([]))
    const retryButton = await wrapper.findComponent(CgButton)
    await retryButton.trigger('click')
    await flushPromises()

    expect(loadTours).toHaveBeenCalledTimes(2)
  })
})
