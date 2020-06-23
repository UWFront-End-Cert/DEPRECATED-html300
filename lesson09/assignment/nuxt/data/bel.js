let bel = {
  0: {
    type: "map",
    country: "Belize",
    zoom: 7,
    center: [-88.35, 17.13]
  },
  1: {
    type: "Feature",
    id: "Hopkins",
    properties: {
      ideas: [{
          a: "Snorkel the Belize Barrier Reef"
        },
        {
          a: 'Cave Tubing and Ziplining',
          b: 'https://cavesbranch.com/belize-cave-tubing-and-zipline/'
        },
        {
          a: 'Make a daytrip to South Water Caye'
        }

      ]
    },
    geometry: {
      "type": "Point",
      "coordinates": [-88.2814, 16.8535]
    }
  },
  2: {
    type: "Feature",
    id: "Belize City",
    properties: {
      ideas: [{
          a: "Visit the Mayan Ruins: Lamanai, Altun Ha, ect"
        },
        {
          a: 'Visit the Community Baboon Sanctuary',
          b: 'http://www.belizehowlermonkeys.org'
        },
        {
          a: 'Snorkel at Turneffe Atoll'
        }
      ]
    },
    geometry: {
      "type": "Point",
      "coordinates": [-88.1962, 17.5046]
    }
  },
  3: {
    type: "Feature",
    id: "Ambergris Caye",
    properties: {
      ideas: [{
          a: "Snorkel the Hol Chan Reef"
        },
        {
          a: "Rent a golf cart and drive through town - try not to get pulled over"
        },
        {
          a: 'Go parasailing'
        }
      ]
    },
    geometry: {
      "type": "Point",
      "coordinates": [-87.9433, 18.0016]
    }
  }


}

module.exports = {
  bel
}
