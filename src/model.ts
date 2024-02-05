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