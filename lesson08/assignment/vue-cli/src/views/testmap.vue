<template>
<div id="map">
   <p>Center: {{ center }} Zoom: {{ zoom }}</p>
   <p>Selected: {{selectedFeatures}}</p>
   <!-- want to make an itinerary array of list of things to do and put that here - making it the string isn't working -->
   <vl-map ref="map" data-projection="EPSG:4326" style="height: 25rem; width: 30rem;" @pointermove="onMapPointerMove" :style="{cursor: mapCursor}">
      <vl-view :zoom.sync="zoom" :center.sync="center"></vl-view>
      <vl-layer-tile>
         <vl-source-osm></vl-source-osm>
      </vl-layer-tile>
      <vl-interaction-select :features.sync="selectedFeatures">
         <vl-style-box>
            <vl-style-icon src="http://simpleicon.com/wp-content/uploads/flag.svg" :scale="0.05"></vl-style-icon>
         </vl-style-box>
      </vl-interaction-select>
      <vl-layer-vector>
         <vl-source-vector :features.sync="features">
            <vl-style-box>
               <vl-style-icon src="http://simpleicon.com/wp-content/uploads/flag_2.png" :scale="0.05"></vl-style-icon>
            </vl-style-box>
         </vl-source-vector>
      </vl-layer-vector>
   </vl-map>
</div>
</template>

<script>
let features = [{
        "type": "Feature",
        "id": 1,
        "itinerary": "Verona",
        "geometry": {
            "type": "Point",
            "coordinates": [
                10.9916, 45.4384
            ]
        }
    },
    {
        "type": "Feature",
        "id": 2,
        "itinerary": "Rome",
        "geometry": {
            "type": "Point",
            "coordinates": [
                12.4964, 41.9028
            ]
        }
    },
    {
        "type": "Feature",
        "id": 3,
        "itinerary": "Milan",
        "geometry": {
            "type": "Point",
            "coordinates": [
                9.1900, 45.4642
            ]
        }
    }
]


export default {
    data() {
        return {
            zoom: 5,
            center: [13.254634831534215, 41.790158738116816],

            features: features,
            selectedFeatures: [],

            mapCursor: 'default'
        }
    },
}
</script>
