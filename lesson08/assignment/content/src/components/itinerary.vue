<template>
  <div id="modal-1" class="modal fade">

    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{card.location}}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <div id="map">
          <!-- <p>Center: {{ center }} Zoom: {{ zoom }}</p>-->
           <p>Selected: {{selectedFeatures}}</p>
           <!-- want to make an itinerary array of list of things to do and put that here - making it the string isn't working -->
           <vl-map ref="map" data-projection="EPSG:4326" style="height: 10rem; width: 90rem; display: absolute;">
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

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>


  <!-- codes ommited -->

</div>
<!--https://jsfiddle.net/YariAndres/m6gk2wbv/9/ -->
<!--https://jsfiddle.net/yb4os541/1/-->
<!--https://codepen.io/djodi/pen/PEaqwe-->
</template>

<script>
import { features } from '../util.js'

export default {
data() {
    return {
   name: this.location,


   zoom: 5,
   center: [13.254634831534215, 41.790158738116816],

   features: features,
   selectedFeatures: []//,

   //mapCursor: 'default'


}},
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

#itinerary-modal{
position: absolute;
}

h3{
display:inline;
}

</style>
