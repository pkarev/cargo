import { describe, it, expect } from 'vitest'
import CgTourCard from '../CgTourCard.vue'
import { mount } from '@vue/test-utils'
import type { Tour } from '../../model'

const mockTour: Tour = {
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
describe('CgTourCard', () => {
  it('renders properly', () => {
    const wrapper = mount(CgTourCard, {
      props: {
        tour: mockTour
      }
    })

    expect(wrapper.text()).includes('Tour')
    expect(wrapper.findInputByPlaceholder('Customer').element.value).includes('Grosskopf Gruppe')
    expect(wrapper.findByTestId('from').find('select').element.value).includes('Heilbronn')
    expect(wrapper.findByTestId('to').find('select').element.value).includes('Menden (Sauerland)')
    expect(wrapper.findInputByPlaceholder('When').element.value).includes('10/21/2099')
    expect(wrapper.findByTestId('driver').find('select').element.value).includes('Luke Drees')
  })

  it('shows controls', async () => {
    const wrapper = mount(CgTourCard, {
      props: {
        tour: mockTour
      }
    })

    expect(wrapper.text()).not.includes('Cancel')
    expect(wrapper.text()).not.includes('Apply')

    const customerInput = wrapper.findInputByPlaceholder('Customer')
    await customerInput.setValue('John Doe')

    expect(wrapper.text()).includes('Cancel')
    expect(wrapper.text()).includes('Apply')
  })

  it('resets changes on Cancel button click', async () => {
    const wrapper = mount(CgTourCard, {
      props: {
        tour: mockTour
      }
    })

    const customerInput = wrapper.findInputByPlaceholder('Customer')
    await customerInput.setValue('John Doe')
    expect(customerInput.element.value).toBe('John Doe')

    const cancelButton = wrapper.findElementByText('button', 'Cancel')
    await cancelButton?.trigger('click')

    expect(customerInput.element.value).toBe('Grosskopf Gruppe')
  })
})
