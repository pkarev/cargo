import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CgDriversItem from '../CgDriversItem.vue'

describe('CgDriversItem', () => {
  it('Renders properly', () => {
    const wrapper = mount(CgDriversItem, {
      props: {
        driver: {
          id: 0,
          name: 'Alea Otte',
          location: 'Bremen'
        }
      }
    })

    expect(wrapper.text()).includes('Alea Otte')
    expect(wrapper.text()).includes('Bremen')
  })
})
