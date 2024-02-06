import type { Tour } from '@/model'

export const loadTours = async (toursLoader: ToursLoader) => {
  try {
    const { error, tours } = await toursLoader.api.loadTours()

    if (error) {
      toursLoader.notifyError(error)

      return
    }

    toursLoader.setTours(tours || [])
  } catch (e) {
    toursLoader.notifyError('Unexpected error')
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
  setTours: (tours: Tour[]) => void
}

export type LoadToursResponse = {
  tours?: Tour[]
  error?: string
}
