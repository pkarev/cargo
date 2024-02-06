import { tours } from '@/api/fixture'
import type { LoadToursApi } from '@/use-cases/load-tours'

export const fakeApi: LoadToursApi = {
  loadTours: async () => {
    return Promise.resolve({
      tours
    })
  }
}
