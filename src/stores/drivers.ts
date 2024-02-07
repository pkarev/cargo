import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { cloneDeep } from 'lodash'
import type { Driver } from '@/model'

export const useDriversStore = defineStore('tours', () => {
  const drivers: Driver[] = reactive([])

  const setDrivers = (newDrivers: Driver[]) => {
    Object.assign(drivers, cloneDeep(newDrivers))
  }

  return { drivers, setDrivers }
})
