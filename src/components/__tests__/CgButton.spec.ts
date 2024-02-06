import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CgButton from '../CgButton.vue'
describe('CgButton', () => {
  describe('renders properly', () => {
    it('theme Main', () => {
      const wrapper = mount(CgButton, {
        props: {
          theme: 'Main'
        },
        slots: {
          default: 'Main button'
        }
      })

      expect(wrapper.text()).to.includes('Main button')
      expect(wrapper.classes()).to.includes('cg-button--main')
    })

    it('theme Invert', () => {
      const wrapper = mount(CgButton, {
        props: {
          theme: 'Invert'
        },
        slots: {
          default: 'Invert button'
        }
      })

      expect(wrapper.text()).to.includes('Invert button')
      expect(wrapper.classes()).to.includes('cg-button--invert')
    })
  })
})
