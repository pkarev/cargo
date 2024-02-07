import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory, Router } from 'vue-router'
import CgDrivers from '../CgDrivers.vue'
import CgDriversItem from '../CgDriversItem.vue'
import { routes } from '../../router/routes'
import { mockDrivers } from '../../api/fixture'

let router: Router
beforeEach(async () => {
  router = createRouter({
    history: createWebHistory(),
    routes
  })

  await router.push('/')
  await router.isReady()
})
describe('CgDrivers', () => {
  describe('renders', () => {
    it('title', () => {
      const wrapper = mount(CgDrivers, {
        props: {
          drivers: mockDrivers
        },
        global: {
          plugins: [router]
        }
      })

      expect(wrapper.text()).toContain('Drivers list')
    })

    it('list', () => {
      const wrapper = mount(CgDrivers, {
        props: {
          drivers: mockDrivers
        },
        global: {
          plugins: [router]
        }
      })

      expect(wrapper.findAllComponents(CgDriversItem).length).toBe(mockDrivers.length)
    })
  })

  it('triggers router link with correct url', async () => {
    const wrapper = mount(CgDrivers, {
      props: {
        drivers: mockDrivers
      },
      global: {
        plugins: [router]
      }
    })

    const push = vi.spyOn(router, 'push')
    const cgDriver = wrapper.findComponent(CgDriversItem)
    await cgDriver.trigger('click')

    expect(push).toHaveBeenCalledTimes(1)
    expect(push).toHaveBeenCalledWith(`/driver/${mockDrivers[0].id}`)
  })
})
