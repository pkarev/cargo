import { describe, it, expect } from 'vitest'
import CgToursItem from '../CgToursItem.vue'
import { mount } from '@vue/test-utils'
describe('CgToursItem', () => {
  it('renders properly', () => {
    const wrapper = mount(CgToursItem, {
      props: {
        tour: {
          id: 0,
          customer: 'Grosskopf Gruppe',
          shipmentDate: '10/21/2099',
          from: 'Heilbronn',
          to: 'Menden (Sauerland)',
          driver: {
            id: 18,
            name: 'Luke Drees',
            location: 'Castrop-Rauxel'
          }
        }
      }
    })

    expect(wrapper.text()).toContain('Driver:')
    expect(wrapper.text()).toContain('Grosskopf Gruppe')
    expect(wrapper.text()).toContain('10/21/2099')
    expect(wrapper.text()).toContain('Heilbronn - Menden (Sauerland)')
    expect(wrapper.text()).toContain('Luke Drees')
  })
})
