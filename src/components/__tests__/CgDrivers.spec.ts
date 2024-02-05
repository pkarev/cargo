import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CgDrivers from '../CgDrivers.vue'

describe('CgDrivers', () => {
  it('renders properly', () => {
    const wrapper = mount(CgDrivers)
    expect(wrapper.text()).toContain('Drivers here')
  })
})
