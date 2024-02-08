import { mockDrivers, mockTours } from '@/api/fixture'
import type { CgApi, Driver, Tour } from '@/model'

export default class FakeCgApi implements CgApi {
  drivers: Driver[] = mockDrivers
  tours: Tour[] = mockTours

  async getTours() {
    return Promise.resolve({
      response: this.tours
    })
  }

  async getDrivers() {
    return Promise.resolve({
      response: this.drivers
    })
  }
}
