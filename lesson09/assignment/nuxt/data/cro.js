let cro = {
  0: {
    type: "map",
    country: "Croatia",
    zoom: 6,
    center: [17.83087, 44.1525424]
  },
  1: {
    type: "Feature",
    id: "Split",
    properties: {
      ideas: [{
          a: "Day trip to Krka National park - Take a swim at the waterfalls!",
        },
        {
          a: "Day trip to Plitvice Lakes - No swimming at these waterfalls but so worth it",
        },
        {
          a: "Tour the city center, and don't forget to rub the big toe"
        },
        {
          a: "Take a day trip to Mostar Bosnia & Herzegovina, Don't forget to stop and the Blue & Red Lakes of Imotski"
        },
        {
          a: 'Hotel: Atrium Hotel',
          b: "https://www.hotel-atrium.hr/?lang=en"
        }
      ]
    },
    geometry: {
      "type": "Point",
      "coordinates": [16.4402, 43.5081]
    }
  },
  2: {
    type: "Feature",
    id: "Dubrovnik",
    properties: {
      ideas: [{
          a: "Day trip to Lokrum Island - Take a photo in the Iron Throne prop used in the Game of Thrones",
        },
        {
          a: "Walk the city walls",
        },
        {
          a: "Tour the city and eat lots of food"
        }
      ]
    },
    geometry: {
      "type": "Point",
      "coordinates": [18.0944, 42.6507]
    }
  },
  3: {
    type: "Feature",
    id: "Hvar",
    properties: {
      ideas: [{
          a: "Climb to the top of the Hvar fortress",
        },
        {
          a: "This island has the best nightlife, join the party",
        },
        {
          a: "Buy some local lavendar products"
        }
      ]
    },
    geometry: {
      "type": "Point",
      "coordinates": [16.4411, 43.1729]
    }
  }




}

module.exports = {
  cro
}
