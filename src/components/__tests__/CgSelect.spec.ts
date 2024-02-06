import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CgSelect from '../CgSelect.vue'

describe('CgSelect', () => {
  describe('renders properly', () => {
    it('contents', () => {
      const wrapper = mount(CgSelect, {
        props: {
          modelValue: 'initialText',
          'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
          options: ['initialText', 'newText'],
          placeholder: 'Select some'
        }
      })

      const select = wrapper.find('select')

      expect(wrapper.text()).to.includes('Select some')
      expect(select.element.value).equals('initialText')
    })

    it('css classes', async () => {
      const wrapper = mount(CgSelect, {
        props: {
          modelValue: 'initialText',
          'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
          options: ['initialText', 'newText'],
          placeholder: 'Select some'
        }
      })

      const select = wrapper.find('select')
      expect(wrapper.classes()).includes('cg-select--filled-in')
      await select.setValue('')
      expect(wrapper.classes()).not.includes('cg-select--filled-in')
    })
  })

  it('updates modelValue on select', async () => {
    const wrapper = mount(CgSelect, {
      props: {
        modelValue: 'initialText',
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
        options: ['initialText', 'newText'],
        placeholder: 'Select some'
      }
    })

    const select = wrapper.find('select')
    await select.setValue('newText')

    expect(select.element.value).equals('newText')
  })
})
