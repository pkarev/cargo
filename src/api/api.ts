import { mockTours } from '@/api/fixture'
import type { GetToursApi } from '@/model'

export const fakeApi: GetToursApi = {
  getTours: async () => {
    return Promise.resolve({
      response: mockTours
    })
  }
}
