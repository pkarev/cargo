import { beforeEach, describe, it, vi, expect } from 'vitest'
import { loadTours } from '@/use-cases/load-tours'
import type { LoadToursResponse } from '@/use-cases/load-tours'
import type { SpyInstance } from 'vitest'
import type { ToursLoader } from '@/use-cases/load-tours'

let toursLoader: ToursLoader
let loadToursSpy: SpyInstance
let notifyErrorSpy: SpyInstance
let setToursSpy: SpyInstance

beforeEach(() => {
  toursLoader = {
    api: {
      async loadTours(): Promise<LoadToursResponse> {
        return Promise.resolve({
          tours: []
        })
      }
    },
    notifyError: () => {},
    setTours: () => {}
  }

  loadToursSpy = vi.spyOn(toursLoader.api, 'loadTours')
  notifyErrorSpy = vi.spyOn(toursLoader, 'notifyError')
  setToursSpy = vi.spyOn(toursLoader, 'setTours')
})
describe('Load tours use case', () => {
  it('handles explicit response error properly', async () => {
    loadToursSpy.mockImplementation((): Promise<LoadToursResponse> => {
      return Promise.resolve({
        error: 'Test Error'
      })
    })

    await loadTours(toursLoader)

    expect(loadToursSpy).toHaveBeenCalledTimes(1)
    expect(notifyErrorSpy).toHaveBeenCalledTimes(1)
    expect(notifyErrorSpy).toHaveBeenCalledWith('Test Error')
    expect(setToursSpy).toHaveBeenCalledTimes(0)
  })

  it('handles unexpected error properly', async () => {
    loadToursSpy.mockImplementation((): Promise<LoadToursResponse> => {
      throw new Error('die')
    })

    await loadTours(toursLoader)

    expect(loadToursSpy).toHaveBeenCalledTimes(1)
    expect(notifyErrorSpy).toHaveBeenCalledTimes(1)
    expect(notifyErrorSpy).toHaveBeenCalledWith('Unexpected error')
    expect(setToursSpy).toHaveBeenCalledTimes(0)
  })

  it('handles success loadTours properly', async () => {
    loadToursSpy.mockImplementation((): Promise<LoadToursResponse> => {
      return Promise.resolve({
        tours: []
      })
    })

    await loadTours(toursLoader)

    expect(loadToursSpy).toHaveBeenCalledTimes(1)
    expect(notifyErrorSpy).toHaveBeenCalledTimes(0)
    expect(setToursSpy).toHaveBeenCalledTimes(1)
  })
})
