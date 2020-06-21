<template>
<article class="chart">
  <div class="form-filter">
    <button @click='changeUnit(false)'> Metric (°C | mm) </button>
    <button @click='changeUnit(true)'>Imperial (°F | in) </button>
  </div>
  <br>
  <highcharts :options="chartOptions" :highcharts="hcInstance"></highcharts>
</article>
</template>

<script>
import {
  Chart
} from 'highcharts-vue'
import Highcharts from "highcharts";

export default {
  components: {
    highcharts: Chart
  },

  props: {
    country: Array
  },
  methods: {

    changeUnit(e) {
      if (e == true) {
        let prcpListN = this.prcpList.map(function(element) {
          return Math.round(element / 25.4)
        });
        let tavgListN = this.tavgList.map(function(element) {
          return Math.round((element * (9 / 5)) + 32)
        });
        let tmaxListN = this.tmaxList.map(function(element) {
          return Math.round((element * (9 / 5)) + 32)
        });
        let tminListN = this.tminList.map(function(element) {
          return Math.round((element * (9 / 5)) + 32)
        });

        this.chartOptions.series[0]['data'] = prcpListN
        this.chartOptions.series[1]['data'] = tavgListN
        this.chartOptions.series[2]['data'] = tmaxListN
        this.chartOptions.series[3]['data'] = tminListN
        this.chartOptions.yAxis[0]['title']['text'] = 'Percipitation (in)'
        this.chartOptions.yAxis[1]['title']['text'] = 'Temperature (°F)'


      } else if (e == false) {
        let prcpListN = this.prcpList
        let tavgListN = this.tavgList
        let tmaxListN = this.tmaxList
        let tminListN = this.tminList
        this.chartOptions.yAxis[0]['title']['text'] = 'Percipitation (mm)'
        this.chartOptions.yAxis[1]['title']['text'] = 'Temperature (°C)'
        this.chartOptions.series[0]['data'] = prcpListN
        this.chartOptions.series[1]['data'] = tavgListN
        this.chartOptions.series[2]['data'] = tmaxListN
        this.chartOptions.series[3]['data'] = tminListN
      }
    }
  },

  data() {
    let c = this.country
    let monthList = []
    let tavgList = []
    let tminList = []
    let tmaxList = []
    let prcpList = []
    let tavgListN = []
    let tminListN = []
    let tmaxListN = []
    let prcpListN = []

    c.forEach(function(obj) {
      tminList.push(Math.round(obj['tmin']));
      tminListN.push(Math.round(obj['tmin']));
      tmaxList.push(Math.round(obj['tmax']));
      tmaxListN.push(Math.round(obj['tmax']));
      tavgList.push(Math.round(obj['tavg']));
      tavgListN.push(Math.round(obj['tavg']));
    })
    c.forEach(function(obj) {
      prcpList.push(Math.round(obj['prcp']));
      prcpListN.push(Math.round(obj['prcp']));
    })
    c.forEach(function(obj) {
      monthList.push(obj['month']);
    })


    return {

      c: c,
      monthList: monthList,
      tavgList: tavgListN,
      tminList: tminListN,
      tmaxList: tmaxListN,
      prcpList: prcpListN,
      hcInstance: Highcharts,
      chartOptions: {
        title: {
          text: ''
        },
        yAxis: [{
     title: {
       text: 'Percipitation (mm)'
     },
     opposite: true,
     lineWidth: 2
   }, {
     title: {
       text: 'Temperature (°C)'
     },
     opposite: false,
     lineWidth: 2
   }],

        series: [{
          type: 'column',
          name: 'Avg Percipitation',
          data: prcpList,
           yAxis: 0
        }, {
          type: 'spline',
          name: 'Avg Temperature',
          data: tavgList,
           yAxis: 1
        }, {
          type: 'spline',
          name: 'Max Temperature',
          data: tmaxList,
           yAxis: 1
        }, {
          type: 'spline',
          name: 'Min Temperature',
          data: tminList,
           yAxis: 1
        }],
        xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
      }
    }
  }

}
</script>

<style scoped lang="scss">
.form-filter {
    display: block;
    position: absolute;
    padding-left: 1.5rem;
    padding-top: 0;
    padding-bottom: 4em;
    margin-left:4em;
}


.chart {
    border: none;//1px solid #000;
    padding: 1.5rem;
    width: 100%;
    //overflow-x: visible;
    //overflow-x: visible;

    &__title {
        font-size: 1rem;
        margin-bottom: 0.25rem;
    }
    &__copy {
        font-size: 0.875rem;
    }
}
</style>
