import type { Driver, Tour } from '@/model'

export const mockDrivers: Driver[] = [
  {
    id: 0,
    name: 'Alea Otte',
    location: 'Cologne'
  },
  {
    id: 1,
    name: 'Filip Nowak',
    location: 'Mannheim'
  },
  {
    id: 2,
    name: 'Thies Leibold',
    location: 'Frankfurt am Main'
  },
  {
    id: 3,
    name: 'Caspar Sutschet',
    location: 'Munich'
  },
  {
    id: 4,
    name: 'Laurens Krull',
    location: 'Hamburg'
  },
  {
    id: 5,
    name: 'Cedric Möllenbeck',
    location: 'Berlin'
  }
]

export const mockTours: Tour[] = [
  {
    id: 0,
    customer: 'Grosskopf Gruppe',
    shipmentDate: '10/21/2099',
    from: 'Berlin',
    to: 'Hamburg',
    driver: {
      id: 5,
      name: 'Cedric Möllenbeck',
      location: 'Berlin'
    }
  },
  {
    id: 1,
    customer: 'Rau, Ahrens und Frey',
    shipmentDate: '12/14/2029',
    from: 'Hamburg',
    to: 'Munich',
    driver: {
      id: 4,
      name: 'Laurens Krull',
      location: 'Hamburg'
    }
  },
  {
    id: 2,
    customer: 'Jaros-Franke',
    shipmentDate: '5/9/2064',
    from: 'Munich',
    to: 'Cologne',
    driver: {
      id: 3,
      name: 'Caspar Sutschet',
      location: 'Munich'
    }
  },
  {
    id: 3,
    customer: 'Dold KG',
    shipmentDate: '1/1/2029',
    from: 'Frankfurt am Main',
    to: 'Mannheim',
    driver: {
      id: 2,
      name: 'Thies Leibold',
      location: 'Frankfurt am Main'
    }
  },
  {
    id: 4,
    customer: 'Blume, Herms und Ranz',
    shipmentDate: '3/30/2063',
    from: 'Mannheim',
    to: 'Cologne',
    driver: {
      id: 1,
      name: 'Filip Nowak',
      location: 'Mannheim'
    }
  }
]

export const locations: string[] = [
  'Berlin',
  'Hamburg',
  'Munich',
  'Cologne',
  'Frankfurt am Main',
  'Mannheim'
]
