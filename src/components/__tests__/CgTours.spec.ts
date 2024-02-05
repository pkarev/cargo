import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CgTours from '../CgTours.vue'

describe('CgTours', () => {
  it('renders properly', () => {
    const wrapper = mount(CgTours)
    expect(wrapper.text()).toContain('Tours here')
  })
})
