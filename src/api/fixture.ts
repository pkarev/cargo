import type { Driver, Tour } from '@/model'

export const drivers: Driver[] = [
  {
    id: 0,
    name: 'Alea Otte',
    location: 'Bremen'
  },
  {
    id: 1,
    name: 'Filip Nowak',
    location: 'Remscheid'
  },
  {
    id: 2,
    name: 'Thies Leibold',
    location: 'Neustadt an der Weinstraße'
  },
  {
    id: 3,
    name: 'Caspar Sutschet',
    location: 'Herne'
  },
  {
    id: 4,
    name: 'Laurens Krull',
    location: 'Bayreuth'
  },
  {
    id: 5,
    name: 'Cedric Möllenbeck',
    location: 'Mainz'
  },
  {
    id: 6,
    name: 'Angela Bauschinger',
    location: 'Delmenhorst'
  },
  {
    id: 7,
    name: 'Antonio Adams',
    location: 'Wesel'
  },
  {
    id: 8,
    name: 'Amalia Erlei',
    location: 'Nordhorn'
  },
  {
    id: 9,
    name: 'Alex Sack',
    location: 'Magdeburg'
  },
  {
    id: 10,
    name: 'Ada Ney',
    location: 'Unna'
  }
]

export const tours: Tour[] = [
  {
    id: 0,
    customer: 'Grosskopf Gruppe',
    shipmentDate: '10/21/2099',
    from: 'Heilbronn',
    to: 'Menden (Sauerland)',
    driver: {
      id: 0,
      name: 'Alea Otte',
      location: 'Bremen'
    }
  },
  {
    id: 1,
    customer: 'Rau, Ahrens und Frey',
    shipmentDate: '12/14/2029',
    from: 'Rheine',
    to: 'Potsdam',
    driver: {
      id: 1,
      name: 'Filip Nowak',
      location: 'Remscheid'
    }
  },
  {
    id: 2,
    customer: 'Jaros-Franke',
    shipmentDate: '5/9/2064',
    from: 'Worms',
    to: 'Mainz',
    driver: {
      id: 2,
      name: 'Thies Leibold',
      location: 'Neustadt an der Weinstraße'
    }
  },
  {
    id: 3,
    customer: 'Dold KG',
    shipmentDate: '1/1/2029',
    from: 'Berlin',
    to: 'Paderborn',
    driver: {
      id: 3,
      name: 'Caspar Sutschet',
      location: 'Herne'
    }
  },
  {
    id: 4,
    customer: 'Blume, Herms und Ranz',
    shipmentDate: '3/30/2063',
    from: 'Elmshorn',
    to: 'Esslingen am Neckar',
    driver: {
      id: 4,
      name: 'Laurens Krull',
      location: 'Bayreuth'
    }
  },
  {
    id: 5,
    customer: 'Brand-Esenwein',
    shipmentDate: '8/23/1992',
    from: 'Rüsselsheim am Main',
    to: 'Mannheim',
    driver: {
      id: 5,
      name: 'Cedric Möllenbeck',
      location: 'Mainz'
    }
  },
  {
    id: 6,
    customer: 'Stoutjesdijk, Mau und Bormann',
    shipmentDate: '10/29/2009',
    from: 'Menden (Sauerland)',
    to: 'Böblingen',
    driver: {
      id: 6,
      name: 'Angela Bauschinger',
      location: 'Delmenhorst'
    }
  },
  {
    id: 7,
    customer: 'Schwab, Eleyth und Kopf',
    shipmentDate: '3/9/2091',
    from: 'Arnsberg',
    to: 'Brandenburg an der Havel',
    driver: {
      id: 7,
      name: 'Antonio Adams',
      location: 'Wesel'
    }
  },
  {
    id: 8,
    customer: 'Kettenis OHG',
    shipmentDate: '11/8/2087',
    from: 'Koblenz',
    to: 'Brandenburg an der Havel',
    driver: {
      id: 8,
      name: 'Amalia Erlei',
      location: 'Nordhorn'
    }
  },
  {
    id: 9,
    customer: 'Schembera KG',
    shipmentDate: '9/2/2082',
    from: 'Gladbeck',
    to: 'Leverkusen',
    driver: {
      id: 9,
      name: 'Alex Sack',
      location: 'Magdeburg'
    }
  },
  {
    id: 10,
    customer: 'Schuster GmbH & Co. KG',
    shipmentDate: '11/3/2052',
    from: 'Bad Oeynhausen',
    to: 'Magdeburg',
    driver: {
      id: 10,
      name: 'Ada Ney',
      location: 'Unna'
    }
  }
]
