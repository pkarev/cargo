import { beforeEach, describe, it, vi, expect } from 'vitest'
import { handleFetch } from '@/use-cases/handle-fetch'
import type { CgApiResponse } from '@/use-cases/handle-fetch'
import type { Fetcher } from '@/use-cases/handle-fetch'
import type { Mock } from '@storybook/test'

let fetcher: Fetcher
let fetchCb: Mock
beforeEach(() => {
  fetchCb = vi.fn()
  fetcher = {
    fetchCb,
    notifyError: vi.fn(),
    setData: vi.fn(),
    resetLocalData: vi.fn()
  }
})
describe('Handle fetch', () => {
  it('inits data fetching properly', async () => {
    await handleFetch(fetcher)

    expect(fetcher.resetLocalData).toHaveBeenCalledTimes(1)
    expect(fetcher.fetchCb).toHaveBeenCalledTimes(1)
  })
  it('handles explicit response error properly', async () => {
    fetchCb.mockImplementation((): Promise<CgApiResponse<string>> => {
      return Promise.resolve({
        error: 'Test Error'
      })
    })

    await handleFetch(fetcher)

    expect(fetcher.notifyError).toHaveBeenCalledWith('Test Error')
    expect(fetcher.setData).toHaveBeenCalledTimes(0)
  })

  it('handles unexpected error properly', async () => {
    fetchCb.mockImplementation((): Promise<CgApiResponse<string>> => {
      throw new Error('die')
    })

    await handleFetch(fetcher)

    expect(fetcher.notifyError).toHaveBeenCalledWith('Unexpected error')
    expect(fetcher.setData).toHaveBeenCalledTimes(0)
  })

  it('handles success fetch properly', async () => {
    fetchCb.mockImplementation((): Promise<CgApiResponse<string>> => {
      return Promise.resolve({
        response: 'aaa'
      })
    })

    await handleFetch(fetcher)

    expect(fetcher.notifyError).toHaveBeenCalledTimes(0)
    expect(fetcher.setData).toHaveBeenCalledTimes(1)
  })
})
