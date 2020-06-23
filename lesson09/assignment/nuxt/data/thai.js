//country: thailand
let thai = {
  0: {
    type: "map",
    zoom: 4,
    center: [104.16969391013174, 4.5784767428281441],
  },
  1: {
    type: "Feature",
    id: "Chiang Mai",
    properties: {
      ideas: [{
          a: "Feed an elephant at the Elephant Sanctuary",
          b: 'http://rantongelephant.com'
        },
        {
          a: "Enjoy a home hosted dinner with the Lanna family",
          b: 'http://chiangmaihomehost.com'
        },
        {
          a: "Visit the night markets"
        },
        {
          a: "Hotel: The Empress Hotel",
          b: 'http://www.empresshotels.com/theEmpressChiangMaiHotel'
        }
      ]
    },
    geometry: {
      "type": "Point",
      "coordinates": [98.9853, 18.7883]
    }
  },
  2: {
    type: "Feature",
    id: "Bangkok",
    properties: {

      ideas: [{
          a: "Visit Wat Phra Phatom Chedi: Light a candle, place it in a fountain, make a wish, and float it away! Then find out what the future holds with a Chineese fourtune stick"
        },
        {
          a: "Visit the Ayutthaya Historical Ruins",
          b: "https://inspitrip.com/blog/9867/detailed-guide-for-an-ayutthaya-day-trip-from-bangkok/"
        },
        {
          a: "Practice your negotiating skills at Damnoen Saduak Floating Markets"
        },
        {
          a: "Grab some cheap souveniers at KaoSan Road aka Backpacker Road, best visited in the evenings and hold on to your belongings!"
        },
        {
          a: "Hotel: Narai Hotel - be sure to check out the streetfood nearby!",
          b: 'https://www.naraihotel.co.th'
        }
      ],
    },
    geometry: {
      "type": "Point",
      "coordinates": [100.5018, 13.7563]
    }
  },

  3: {
    type: "Feature",
    id: "Phuket",
    properties: {
      ideas: [{
          a: "Get a Thai massage in Phuket",
          b: "https://letsrelaxspa.com/cities/phuket/"
        },
        {
          a: "Take a day tour and visit the islands: Koh Rang Yai, Koh Phi Phi, and Koh Hong (by Starlight)",
          b: 'https://www.viator.com/Phuket/d349-ttd'
        },
        {
          a: "Hotel: Andakira hotel",
          b: 'http://andakirapatong.andakiragroup.com'
        }
      ]
      //"Noteworthy hotels: (Phitsanulok; Amarin lagoon hotel )"
    },
    geometry: {
      "type": "Point",
      "coordinates": [98.3923, 7.8804]
    }
  }

}
module.exports = {
  thai
}
