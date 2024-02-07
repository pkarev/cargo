import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { cloneDeep } from 'lodash'
import type { Tour } from '@/model'

export const useToursStore = defineStore('counter', () => {
  const tours: Tour[] = reactive([])

  const setTours = (newTours: Tour[]) => {
    Object.assign(tours, cloneDeep(newTours))
  }

  return { tours, setTours }
})
