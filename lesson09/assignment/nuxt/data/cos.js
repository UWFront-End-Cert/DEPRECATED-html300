let cos = {
    0: {
      type: "map",
      country: "costarica",
      zoom: 7,
      center: [-83.88686123865612, 9.22536709622795]
    },
    1: {
      type: "Feature",
      id: "Arenal",
      properties: {
        ideas: [{
            a: "Swim under the La Fortuna Waterfall",
          },
          {
            a: 'kayak Lake Arenal'
          },
          {
            a: 'Volcán Look Disco Club'
          },
          {
            a: 'Go for a swim in the Hot springs (Just get a daypass or stay at the resort)',
            b: "https://www.baldihotsprings.cr"
          }
        ]
      },
      geometry: {
        "type": "Point",
        "coordinates": [-84.7032, 10.4626]
      }
    },
    2: {
      type: "Feature",
      id: "Monte Verde",
      properties: {
        ideas: [{
          a: "Zipline the Cloud Forest",
          b: 'https://selvatura.com/tours/canopy-tour/'
        }, {
          a: 'Hotel: Hotel El Amanecer',
          b: 'https://el-amanecer.hotelsinpuntarenas.com/en/'
        }]
      },
      geometry: {
        "type": "Point",
        "coordinates": [-84.8255, 10.2750]
      }
    },

    3: {
      type: "Feature",
      id: "Jaco",
      properties: {
        ideas: [{
          a: "Visit Jaco Blue Beach Club - Drinks are free for ladies till midnight on Saturdays!"

        }, {
          a: "Get some ice cream at POPs"
        },
        {
          a: "Take a surf lesson"
        }
      ]
      },
      geometry: {
        "type": "Point",
        "coordinates": [-84.6217, 9.6202]
      }
    },

      4: {
        type: "Feature",
        id: "Puntarenas",
        properties: {
          ideas: [{
            a: "Visit the Manuel Antonio National Park",
            b: 'https://manuelantoniopark.com'
          }]
        },
        geometry: {
          "type": "Point",
          "coordinates": [-84.1370, 9.3923]
        }
      }


    }
    module.exports = {
      cos
    }
