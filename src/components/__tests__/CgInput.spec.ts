import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CgInput from '../CgInput.vue'

describe('CgNav', () => {
  describe('renders properly', () => {
    it('placeholder', () => {
      const wrapper = mount(CgInput, {
        props: {
          placeholder: 'Test placeholder',
          modelValue: 'Test value'
        }
      })

      expect(wrapper.text()).toContain('Test placeholder')
    })

    it('value', () => {
      const wrapper = mount(CgInput, {
        props: {
          placeholder: 'Test placeholder',
          modelValue: 'Test value'
        }
      })

      const input = wrapper.find('input')

      expect(input.element.value).toContain('Test value')
    })
  })

  it('emits update:modelValue on input event', async () => {
    const wrapper = mount(CgInput, {
      props: {
        placeholder: 'Test placeholder',
        modelValue: 'Test value'
      }
    })

    const input = wrapper.find('input')
    await input.setValue('test value')

    const inputEvent = wrapper.emitted<InputEvent[]>('update:modelValue')
    expect(inputEvent).toHaveLength(1)
    expect(inputEvent?.[0]).toEqual(['test value'])
    expect(input.element.value).toBe('test value')
  })
})
