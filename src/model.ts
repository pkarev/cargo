import type { CgApiResponse } from '@/use-cases/handle-fetch'

export type Tour = {
  id: number
  customer: string
  shipmentDate: string
  from: string
  to: string
  driver: Driver
}

export type Driver = {
  id: number
  name: string
  location: string
}

export interface GetToursApi {
  getTours(): Promise<CgApiResponse<Tour[]>>
}

export interface GetDriversApi {
  getDrivers(): Promise<CgApiResponse<Driver[]>>
}

export interface CgApi extends GetToursApi, GetDriversApi {}
