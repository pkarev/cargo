import type { Tour } from '@/model'

export const handleFetch = async ({
  fetchCb,
  setLoading,
  resetLocalData,
  setData,
  notifyError
}: Fetcher) => {
  setLoading(true)

  try {
    resetLocalData()
    const { error, response } = await fetchCb()

    if (error) {
      notifyError(error)

      return
    }

    if (!response) {
      return
    }

    setData(response)
  } catch (e) {
    notifyError('Unexpected error')
  } finally {
    setLoading(false)
  }
}

export interface Fetcher {
  fetchCb: () => Promise<CgApiResponse<any>>
  notifyError: (message: string) => void
  resetLocalData: () => void
  setData: (tours: Tour[]) => void
  setLoading: (val: boolean) => void
}

export type CgApiResponse<T> = {
  response?: T
  error?: string
}
