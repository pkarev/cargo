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
  },
  {
    id: 11,
    name: 'Kai Röse',
    location: 'Dessau-Roßlau'
  },
  {
    id: 12,
    name: 'Kay Jacobs',
    location: 'Neumünster'
  },
  {
    id: 13,
    name: 'Lennox Ahlke',
    location: 'Dessau-Roßlau'
  },
  {
    id: 14,
    name: 'Amy Göhler',
    location: 'Lünen'
  },
  {
    id: 15,
    name: 'Lino May',
    location: 'Dorsten'
  },
  {
    id: 16,
    name: 'Florian Evers',
    location: 'Brandenburg an der Havel'
  },
  {
    id: 17,
    name: 'Helene Bienias',
    location: 'Heidenheim an der Brenz'
  },
  {
    id: 18,
    name: 'Luke Drees',
    location: 'Castrop-Rauxel'
  },
  {
    id: 19,
    name: 'Leana Herweg',
    location: 'Elmshorn'
  },
  {
    id: 20,
    name: 'Ahmad Nowak',
    location: 'Wesel'
  },
  {
    id: 21,
    name: 'Tino Feller',
    location: 'Dinslaken'
  },
  {
    id: 22,
    name: 'Amira Mewes',
    location: 'Esslingen am Neckar'
  },
  {
    id: 23,
    name: 'Darren Timmermann',
    location: 'Gummersbach'
  },
  {
    id: 24,
    name: 'Tobias Falter',
    location: 'Gummersbach'
  },
  {
    id: 25,
    name: 'Silas Cronjäger',
    location: 'Magdeburg'
  },
  {
    id: 26,
    name: 'Kyra Ophey',
    location: 'Wilhelmshaven'
  },
  {
    id: 27,
    name: 'Prof. Dr. Connor Pfeiffer',
    location: 'Göppingen'
  },
  {
    id: 28,
    name: 'Chiara Danneberg',
    location: 'Rheine'
  },
  {
    id: 29,
    name: 'Nela Gehrke',
    location: 'Pulheim'
  },
  {
    id: 30,
    name: 'Julienne Lutz',
    location: 'Rastatt'
  },
  {
    id: 31,
    name: 'Dario Wezel',
    location: 'Dormagen'
  },
  {
    id: 32,
    name: 'Laurens Herzenberg',
    location: 'Villingen-Schwenningen'
  },
  {
    id: 33,
    name: 'Angelique Wallner',
    location: 'Baden-Baden'
  },
  {
    id: 34,
    name: 'Viktor Heist',
    location: 'Saarbrücken'
  },
  {
    id: 35,
    name: 'Jacqueline Dutkiewicz',
    location: 'Dinslaken'
  },
  {
    id: 36,
    name: 'Sude Mörsch',
    location: 'Mannheim'
  },
  {
    id: 37,
    name: 'Christian Stube',
    location: 'Hameln'
  },
  {
    id: 38,
    name: 'Marika Mielke',
    location: 'Magdeburg'
  },
  {
    id: 39,
    name: 'Celina Hillard',
    location: 'Weimar'
  },
  {
    id: 40,
    name: 'Lily Slotta',
    location: 'Potsdam'
  },
  {
    id: 41,
    name: 'Cedric Nannen',
    location: 'Schwerin'
  },
  {
    id: 42,
    name: 'Jona Dauth',
    location: 'Berlin'
  },
  {
    id: 43,
    name: 'Henning Grosskopf',
    location: 'Schwäbisch Gmünd'
  },
  {
    id: 44,
    name: 'Moritz Gast',
    location: 'Lübeck'
  },
  {
    id: 45,
    name: 'Sinan Dörner',
    location: 'Münster'
  },
  {
    id: 46,
    name: 'Sebastian Riethmüller',
    location: 'Gladbeck'
  },
  {
    id: 47,
    name: 'Alice Koszewski',
    location: 'Dortmund'
  },
  {
    id: 48,
    name: 'Sydney Sinnhuber',
    location: 'Gronau (Westf.)'
  },
  {
    id: 49,
    name: 'Miriam Greger',
    location: 'Leipzig'
  }
]

export const tours: Tour[] = [
  {
    id: 0,
    customer: 'Grosskopf Gruppe',
    shipmentDate: '10/21/2099',
    from: 'Heilbronn',
    to: 'Menden (Sauerland)',
    driver: drivers[18]
  },
  {
    id: 1,
    customer: 'Rau, Ahrens und Frey',
    shipmentDate: '12/14/2029',
    from: 'Rheine',
    to: 'Potsdam',
    driver: drivers[10]
  },
  {
    id: 2,
    customer: 'Jaros-Franke',
    shipmentDate: '5/9/2064',
    from: 'Worms',
    to: 'Mainz',
    driver: drivers[7]
  },
  {
    id: 3,
    customer: 'Dold KG',
    shipmentDate: '1/1/2029',
    from: 'Berlin',
    to: 'Paderborn',
    driver: drivers[33]
  },
  {
    id: 4,
    customer: 'Blume, Herms und Ranz',
    shipmentDate: '3/30/2063',
    from: 'Elmshorn',
    to: 'Esslingen am Neckar',
    driver: drivers[46]
  },
  {
    id: 5,
    customer: 'Brand-Esenwein',
    shipmentDate: '8/23/1992',
    from: 'Rüsselsheim am Main',
    to: 'Mannheim',
    driver: drivers[4]
  },
  {
    id: 6,
    customer: 'Stoutjesdijk, Mau und Bormann',
    shipmentDate: '10/29/2009',
    from: 'Menden (Sauerland)',
    to: 'Böblingen',
    driver: drivers[0]
  },
  {
    id: 7,
    customer: 'Schwab, Eleyth und Kopf',
    shipmentDate: '3/9/2091',
    from: 'Arnsberg',
    to: 'Brandenburg an der Havel',
    driver: drivers[0]
  },
  {
    id: 8,
    customer: 'Kettenis OHG',
    shipmentDate: '11/8/2087',
    from: 'Koblenz',
    to: 'Brandenburg an der Havel',
    driver: drivers[22]
  },
  {
    id: 9,
    customer: 'Schembera KG',
    shipmentDate: '9/2/2082',
    from: 'Gladbeck',
    to: 'Leverkusen',
    driver: drivers[11]
  },
  {
    id: 10,
    customer: 'Schuster GmbH & Co. KG',
    shipmentDate: '11/3/2052',
    from: 'Bad Oeynhausen',
    to: 'Magdeburg',
    driver: drivers[7]
  },
  {
    id: 11,
    customer: 'Weiler-Fitschen',
    shipmentDate: '6/26/1996',
    from: 'Plauen',
    to: 'Kerpen',
    driver: drivers[37]
  },
  {
    id: 12,
    customer: 'Zipse Gruppe',
    shipmentDate: '6/2/1996',
    from: 'Dinslaken',
    to: 'Oberhausen',
    driver: drivers[43]
  },
  {
    id: 13,
    customer: 'Rach, Ponitzsch und Brinkmann',
    shipmentDate: '2/13/2024',
    from: 'Ingolstadt',
    to: 'Moers',
    driver: drivers[17]
  },
  {
    id: 14,
    customer: 'Carlowitz OHG',
    shipmentDate: '8/17/2073',
    from: 'Gera',
    to: 'Rosenheim',
    driver: drivers[40]
  },
  {
    id: 15,
    customer: 'Höcke-Ibe',
    shipmentDate: '12/21/2044',
    from: 'Tübingen',
    to: 'Meerbusch',
    driver: drivers[16]
  },
  {
    id: 16,
    customer: 'Northoff Gruppe',
    shipmentDate: '8/7/2046',
    from: 'Bad Kreuznach',
    to: 'Iserlohn',
    driver: drivers[17]
  },
  {
    id: 17,
    customer: 'Schuermann GmbH',
    shipmentDate: '7/5/2064',
    from: 'Magdeburg',
    to: 'Remscheid',
    driver: drivers[38]
  },
  {
    id: 18,
    customer: 'Deerberg GmbH & Co. KG',
    shipmentDate: '11/22/2030',
    from: 'Bochum',
    to: 'Heidelberg',
    driver: drivers[46]
  },
  {
    id: 19,
    customer: 'Kühnemund, Soller und Bloch',
    shipmentDate: '9/8/2027',
    from: 'Solingen',
    to: 'Ludwigsburg',
    driver: drivers[33]
  },
  {
    id: 20,
    customer: 'Marl, Obergföll und Preuss',
    shipmentDate: '10/26/2008',
    from: 'Rosenheim',
    to: 'Heidenheim an der Brenz',
    driver: drivers[38]
  },
  {
    id: 21,
    customer: 'Hoppe, Thomas und Alizadeh',
    shipmentDate: '4/14/2074',
    from: 'Remscheid',
    to: 'Witten',
    driver: drivers[49]
  },
  {
    id: 22,
    customer: 'Schreiber UG',
    shipmentDate: '6/10/2092',
    from: 'Leonberg',
    to: 'Ahlen',
    driver: drivers[21]
  },
  {
    id: 23,
    customer: 'Neupert-Huckestein',
    shipmentDate: '11/8/2047',
    from: 'Regensburg',
    to: 'Oberhausen',
    driver: drivers[28]
  },
  {
    id: 24,
    customer: 'Stanger Gruppe',
    shipmentDate: '9/14/2038',
    from: 'Gladbeck',
    to: 'Hameln',
    driver: drivers[40]
  },
  {
    id: 25,
    customer: 'Verzi GmbH & Co. KG',
    shipmentDate: '6/22/2085',
    from: 'Pforzheim',
    to: 'Wolfenbüttel',
    driver: drivers[3]
  },
  {
    id: 26,
    customer: 'Krauspe-Hahn',
    shipmentDate: '4/12/2005',
    from: 'Dresden',
    to: 'Bayreuth',
    driver: drivers[26]
  },
  {
    id: 27,
    customer: 'Kisabaka OHG',
    shipmentDate: '12/31/2033',
    from: 'Nürnberg',
    to: 'Meerbusch',
    driver: drivers[0]
  },
  {
    id: 28,
    customer: 'Somssich UG',
    shipmentDate: '3/30/2090',
    from: 'Trier',
    to: 'Sindelfingen',
    driver: drivers[45]
  },
  {
    id: 29,
    customer: 'Ostwald, Riekmann und Jasinski',
    shipmentDate: '9/20/2068',
    from: 'Lippstadt',
    to: 'Detmold',
    driver: drivers[42]
  }
]
