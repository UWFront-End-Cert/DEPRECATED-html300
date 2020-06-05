<template>
<div id="map">
  <b-row>
    <b-col lg='6' sm="12">
      <vl-map ref="map" class="mapimg" data-projection="EPSG:4326">
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
    </b-col>
    <b-col lg='6' sm="12">

      <p>Selected: {{selectedFeatures}}</p>
    </b-col>
  </b-row>
</div>
</template>

<script>
import {
  features
} from '../util.js'

const filterObject = (obj, filter, filterValue) =>
  Object.keys(obj).reduce((acc, val) =>
    (obj[val][filter] === filterValue ? {
      ...acc,
      [val]: obj[val]
    } : acc), {});

//console.log(features)
//console.log(filterObject(features, 'type', 'Feature'));
//console.log(Object.values(filterObject(features, 'type', "map"))[0].center);
//console.log(Object.values(filterObject(features, 'type', "Feature")));

//https://stackoverflow.com/questions/5072136/javascript-filter-for-objects/37616104
export default {
  data() {
    return {
      name: this.location,
      zoom: Object.values(filterObject(features, 'type', "map"))[0].zoom, //5,
      center: Object.values(filterObject(features, 'type', "map"))[0].center, //[13.254634831534215, 41.790158738116816],
      features: Object.values(filterObject(features, 'type', "Feature")),
      selectedFeatures: []
    }
  },
  props: {
    card: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang='scss'>
@import './src/main.scss';
.mapimg {
    width: 100%;
    height: 25rem;
}
</style>
