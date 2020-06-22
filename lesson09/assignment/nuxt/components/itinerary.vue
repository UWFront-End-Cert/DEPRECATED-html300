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
            <!--https://jsfiddle.net/ghettovoice/b07z1dcx/-->
            <vl-style-box>
              <vl-style-icon src="http://simpleicon.com/wp-content/uploads/flag_2.png" :scale="0.05"></vl-style-icon>
            </vl-style-box>
          </vl-source-vector>
        </vl-layer-vector>
      </vl-map>
    </b-col>
    <b-col lg='6' sm="12">
<div v-for="feature in selectedFeatures" :key="feature.id">
<h1>{{ feature.id}}</h1>
<p>Recommendations:</p>
      <ul>
           <li v-for="ideas in feature.properties.ideas">

            <component :is="ideas.b?'a':'span'" :href="ideas.b || ''" target="_blank">{{ideas.a}}
            </component>

           </li>
         </ul>
       </div>
    </b-col>
  </b-row>
</div>
</template>

<script>

const filterObject = (obj, filter, filterValue) =>
  Object.keys(obj).reduce((acc, val) =>
    (obj[val][filter] === filterValue ? {
      ...acc,
      [val]: obj[val]
    } : acc), {});

export default {

  props: {
    card: {
      type: Object,
      required: true
    }
  },
  data() {
    let features = this.card.it
    return {
      name: this.location,
      zoom: Object.values(filterObject(features, 'type', "map"))[0].zoom, //5,
      center: Object.values(filterObject(features, 'type', "map"))[0].center, //[13.254634831534215, 41.790158738116816],
      features: Object.values(filterObject(features, 'type', "Feature")),
      selectedFeatures: []
    }
  }
  };
</script>

<style scoped lang='scss'>
@import './main.scss';
.mapimg {
    width: 100%;
    height: 25rem;
}
li{
  list-style-type: circle;
}
</style>
