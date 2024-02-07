import { inject, ref } from 'vue'
import { useToursStore } from '@/stores/tours'
import { handleFetch } from '@/use-cases/handle-fetch'
import type { GetToursApi, Tour } from '@/model'
import type { Ref } from 'vue'

export const useLoadTours = (): {
  loadTours: () => Promise<void>
  tours: Tour[]
  error: Ref<string>
  isLoading: Ref<boolean>
} => {
  const { setTours, tours } = useToursStore()
  const isLoading = ref<boolean>(false)
  const error = ref('')
  const api: GetToursApi = inject('api') as GetToursApi
  const fetchCb = () => api.getTours()
  const resetLocalData = () => {
    setTours([])
    error.value = ''
  }

  const setLoading = (val: boolean) => {
    isLoading.value = val
  }
  const setError = (message: string) => {
    error.value = message
  }

  const loadTours = () =>
    handleFetch({
      fetchCb,
      setLoading,
      resetLocalData,
      setData: setTours,
      notifyError: setError
    })

  return { loadTours, tours, error, isLoading }
}
