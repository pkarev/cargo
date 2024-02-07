import { beforeEach, expect, describe, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useToursStore } from '@/stores/tours'

beforeEach(() => {
  setActivePinia(createPinia())
})

const mockTour = {
  id: 0,
  customer: 'Grosskopf Gruppe',
  shipmentDate: '10/21/2099',
  from: 'Heilbronn',
  to: 'Menden (Sauerland)',
  driver: {
    id: 0,
    name: 'Alea Otte',
    location: 'Bremen'
  }
}
describe('Tours store', () => {
  it('sets tours', () => {
    const toursStore = useToursStore()

    expect(toursStore.tours.length).toBe(0)

    toursStore.setTours([mockTour])

    expect(toursStore.tours.length).toBe(1)
    expect(toursStore.tours[0]).toEqual(mockTour)
  })
})
