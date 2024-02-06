import { describe, it, expect } from 'vitest'
import CgDriverCard from '../CgDriverCard.vue'
import { mount } from '@vue/test-utils'

const mockDriver = {
  id: 0,
  name: 'Alea Otte',
  location: 'Bremen'
}

describe('CgDriver', () => {
  it('render properly', () => {
    const wrapper = mount(CgDriverCard, {
      props: {
        driver: mockDriver
      }
    })

    expect(wrapper.text()).includes('Driver')
    expect(wrapper.findInputByPlaceholder('Name').element.value).includes('Alea Otte')
    expect(wrapper.findByTestId('location').find('select').element.value).includes('Bremen')
  })

  it('shows controls', async () => {
    const wrapper = mount(CgDriverCard, {
      props: {
        driver: mockDriver
      }
    })

    expect(wrapper.text()).not.includes('Cancel')
    expect(wrapper.text()).not.includes('Apply')

    const nameInput = wrapper.findInputByPlaceholder('Name')
    await nameInput.setValue('John Doe')

    expect(wrapper.text()).includes('Cancel')
    expect(wrapper.text()).includes('Apply')
  })

  it('resets changes on Cancel button click', async () => {
    const wrapper = mount(CgDriverCard, {
      props: {
        driver: mockDriver
      }
    })

    const nameInput = wrapper.findInputByPlaceholder('Name')
    await nameInput.setValue('John Doe')
    expect(nameInput.element.value).toBe('John Doe')

    const cancelButton = wrapper.findElementByText('button', 'Cancel')
    await cancelButton?.trigger('click')

    expect(nameInput.element.value).toBe('Alea Otte')
  })
})
