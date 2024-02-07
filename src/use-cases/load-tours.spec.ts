import { beforeEach, describe, it, vi, expect } from 'vitest'
import type { Mock } from 'vitest'
import type { LoadToursResponse } from '@/use-cases/load-tours'
import type { ToursLoader } from '@/use-cases/load-tours'
import { loadTours } from '@/use-cases/load-tours'

let toursLoader: ToursLoader
let apiLoadTours: Mock

beforeEach(() => {
  apiLoadTours = vi.fn()
  toursLoader = {
    api: {
      loadTours: apiLoadTours
    },
    notifyError: vi.fn(),
    setTours: vi.fn(),
    resetTours: vi.fn(),
    setLoading: vi.fn()
  }
})
describe('Load tours use case', () => {
  it('inits tours loading properly', async () => {
    await loadTours(toursLoader)

    expect(toursLoader.setLoading).toHaveBeenCalledTimes(2)
    expect(toursLoader.setLoading).toHaveBeenCalledWith(true)
    expect(toursLoader.setLoading).toHaveBeenCalledWith(false)
    expect(toursLoader.resetTours).toHaveBeenCalledTimes(1)
    expect(toursLoader.api.loadTours).toHaveBeenCalledTimes(1)
  })
  it('handles explicit response error properly', async () => {
    apiLoadTours.mockImplementation((): Promise<LoadToursResponse> => {
      return Promise.resolve({
        error: 'Test Error'
      })
    })

    await loadTours(toursLoader)

    expect(toursLoader.notifyError).toHaveBeenCalledWith('Test Error')
    expect(toursLoader.setTours).toHaveBeenCalledTimes(0)
  })

  it('handles unexpected error properly', async () => {
    apiLoadTours.mockImplementation((): Promise<LoadToursResponse> => {
      throw new Error('die')
    })

    await loadTours(toursLoader)

    expect(toursLoader.notifyError).toHaveBeenCalledWith('Unexpected error')
    expect(toursLoader.setTours).toHaveBeenCalledTimes(0)
  })

  it('handles success loadTours properly', async () => {
    apiLoadTours.mockImplementation((): Promise<LoadToursResponse> => {
      return Promise.resolve({
        tours: []
      })
    })

    await loadTours(toursLoader)

    expect(toursLoader.notifyError).toHaveBeenCalledTimes(0)
    expect(toursLoader.setTours).toHaveBeenCalledTimes(1)
  })
})
