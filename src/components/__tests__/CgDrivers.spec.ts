import { describe, it, expect, vi, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import CgDrivers from '../CgDrivers.vue'
import { createRouter, createWebHistory, Router } from 'vue-router'
import { routes } from '../../router/routes'
import { drivers } from '../../api/fixture'
import CgDriversItem from '../CgDriversItem.vue'

const mockDirvers: Driver[] = [drivers[0], drivers[1], drivers[2], drivers[3]]
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
          drivers: mockDirvers
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
          drivers: mockDirvers
        },
        global: {
          plugins: [router]
        }
      })

      expect(wrapper.findAllComponents(CgDriverCard).length).toBe(mockDirvers.length)
    })
  })

  it('triggers router link with correct url', async () => {
    const wrapper = mount(CgDrivers, {
      props: {
        drivers: mockDirvers
      },
      global: {
        plugins: [router]
      }
    })

    const push = vi.spyOn(router, 'push')
    const cgDriver = wrapper.findComponent(CgDriversItem)
    await cgDriver.trigger('click')

    expect(push).toHaveBeenCalledTimes(1)
    expect(push).toHaveBeenCalledWith(`/driver/${drivers[0].id}`)
  })
})
