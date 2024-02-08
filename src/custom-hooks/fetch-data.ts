import { ref } from 'vue'
import { handleFetch } from '@/use-cases/handle-fetch'
import type { CgApiResponse } from '@/use-cases/handle-fetch'
import type { Ref } from 'vue'

export const useFetchData = <T>({
  setData,
  fetchCb
}: {
  setData: (data: T) => void
  fetchCb: () => Promise<CgApiResponse<T>>
}): {
  error: Ref<string>
  fetchData: () => Promise<void>
} => {
  const error = ref('')
  const resetLocalData = () => {
    setData([] as T)
    error.value = ''
  }

  const setError = (message: string) => {
    error.value = message
  }

  const fetchData = () =>
    handleFetch({
      fetchCb,
      resetLocalData,
      setData,
      notifyError: setError
    })

  return { error, fetchData }
}
