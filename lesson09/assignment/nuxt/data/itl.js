let itl ={
  0: {
    type: "map",
    country: "Italy",
    zoom: 5,
    center: [13.254634831534215, 41.790158738116816]
  },
  1: {
    type: "Feature",
    id: "Verona",
    properties: {itinerary: "italy",
    ideas: ["Visit Juliet's House"]},
    geometry: {
      "type": "Point",
      "coordinates": [10.9916, 45.4384]
    }
  },
  2: {
    type: "Feature",
    id: "Rome",
    properties: {itinerary: "italy",
    ideas: ["Take a pasta making class", "Visit the Trevi Fountain"]},
    geometry: {
      "type": "Point",
      "coordinates": [12.4964, 41.9028]
    }
  },
  3: {
    type: "Feature",
    id: "Milan",
    properties: {itinerary: "italy",
    ideas: ["Visit the Duomo"]},
    geometry: {
      "type": "Point",
      "coordinates": [9.1900, 45.4642]
    }
  }
}

module.exports= {itl}
