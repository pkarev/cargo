import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import CgNav from '../CgNav.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: []
})

describe('CgNav', () => {
  it('renders properly', () => {
    const wrapper = mount(CgNav, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.text()).toContain('Tours')
    expect(wrapper.text()).toContain('Drivers')
  })
})
