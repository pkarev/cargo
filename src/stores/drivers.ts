import { computed, ComputedRef, reactive } from 'vue'
import { defineStore } from 'pinia'
import { cloneDeep } from 'lodash'
import type { Driver, Tour } from '@/model'

export const useDriversStore = defineStore('drivers', () => {
  const drivers: Driver[] = reactive([])

  const setDrivers = (newDrivers: Driver[]) => {
    Object.assign(drivers, cloneDeep(newDrivers))
  }

  const getDriverById = (id: number): ComputedRef<Tour | null> =>
    computed(() => {
      return drivers.find((driver) => driver.id === id) || null
    })

  return { drivers, setDrivers, getDriverById }
})
