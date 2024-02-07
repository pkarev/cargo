import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { cloneDeep } from 'lodash'
import type { ComputedRef } from 'vue'
import type { Tour } from '@/model'

export const useToursStore = defineStore('tours', () => {
  const tours: Tour[] = reactive([])

  const setTours = (newTours: Tour[]) => {
    Object.assign(tours, cloneDeep(newTours))
  }

  const getTourById = (id: number): ComputedRef<Tour | null> =>
    computed(() => {
      return tours.find((tour) => tour.id === id) || null
    })

  return { tours, setTours, getTourById }
})
