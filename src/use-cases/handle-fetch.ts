export const handleFetch = async ({ fetchCb, resetLocalData, setData, notifyError }: Fetcher) => {
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
  }
}

export interface Fetcher {
  fetchCb: () => Promise<CgApiResponse<any>>
  notifyError: (message: string) => void
  resetLocalData: () => void
  setData: (data: any) => void
}

export type CgApiResponse<T> = {
  response?: T
  error?: string
}
