import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import type { Router } from 'vue-router'

import CgTours from '../CgTours.vue'
import CgToursItem from '../CgToursItem.vue'
import { tours } from '../../api/fixture'
import { routes } from '../../router/routes'

const mockTours = [tours[0], tours[1], tours[2], tours[3]]
let router: Router

beforeEach(async () => {
  router = createRouter({
    history: createWebHistory(),
    routes
  })

  await router.push('/')
  await router.isReady()
})
describe('CgTours', () => {
  it('renders title', () => {
    const wrapper = mount(CgTours, {
      props: {
        tours: mockTours
      },
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.text()).toContain('Tours list')
  })

  it('renders list', () => {
    const wrapper = mount(CgTours, {
      props: {
        tours: mockTours
      },
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.findAllComponents(CgToursItem).length).toBe(mockTours.length)
  })

  it('triggers router link with correct url', async () => {
    const wrapper = mount(CgTours, {
      props: {
        tours: mockTours
      },
      global: {
        plugins: [router]
      }
    })

    const push = vi.spyOn(router, 'push')
    const CgTour = wrapper.findComponent(CgToursItem)
    await CgTour.trigger('click')

    expect(push).toHaveBeenCalledTimes(1)
    expect(push).toHaveBeenCalledWith(`/tour/${tours[0].id}`)
  })
})
