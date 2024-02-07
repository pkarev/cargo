import type { Tour } from '@/model'

export const loadTours = async ({
  notifyError,
  resetTours,
  setTours,
  api,
  setLoading
}: ToursLoader) => {
  setLoading(true)

  try {
    resetTours()
    const { error, tours } = await api.loadTours()

    if (error) {
      notifyError(error)

      return
    }

    setTours(tours || [])
  } catch (e) {
    notifyError('Unexpected error')
  } finally {
    setLoading(false)
  }
}

const useLoadTours = (toursLoader: ToursLoader) => {
  return {
    loadTours: () => loadTours(toursLoader)
  }
}

export default useLoadTours

export type LoadToursApi = {
  loadTours(): Promise<LoadToursResponse>
}

export interface ToursLoader {
  api: LoadToursApi
  notifyError: (message: string) => void
  resetTours: () => void
  setTours: (tours: Tour[]) => void
  setLoading: (val: boolean) => void
}

export type LoadToursResponse = {
  tours?: Tour[]
  error?: string
}
