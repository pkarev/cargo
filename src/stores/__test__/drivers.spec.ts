import { beforeEach, expect, describe, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useDriversStore } from '@/stores/drivers'
import type { Driver } from '@/model'

beforeEach(() => {
  setActivePinia(createPinia())
})

const mockDriver: Driver = {
  id: 0,
  name: 'Alea Otte',
  location: 'Bremen'
}
describe('Drivers store', () => {
  it('sets drivers', () => {
    const driversStore = useDriversStore()

    expect(driversStore.drivers.length).toBe(0)

    driversStore.setDrivers([mockDriver])

    expect(driversStore.drivers.length).toBe(1)
    expect(driversStore.drivers[0]).toEqual(mockDriver)
  })
})
