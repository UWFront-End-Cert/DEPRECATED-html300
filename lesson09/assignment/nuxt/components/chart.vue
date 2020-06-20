<template>
<article class="chart">
  <div class="form-filter">
    <label>Units</label>
    <button @click='changeUnit(false)'> Metric (mm | °C) </button>
    <button @click='changeUnit(true)'>Imperial (in | °F) </button>
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
        console.log('change-t')
        console.log(e);
        let prcpListN = this.prcpList.map(function(element) {
          return element / 25.4
        });
        let tavgListN = this.tavgList.map(function(element) {
          return (element * (9 / 5)) + 32
        });

        this.chartOptions.series[0]['data'] = prcpListN
        this.chartOptions.series[1]['data'] = tavgListN

      } else if (e == false) {
        console.log('change-f')
        console.log(e);
        let prcpListN = this.prcpList
        let tavgListN = this.tavgList
        this.chartOptions.series[0]['data'] = prcpListN
        this.chartOptions.series[1]['data'] = tavgListN
      }
    }

  },

  data() {

    let c = this.country
    let monthList = []
    let tavgList = []
    let prcpList = []
    let tavgListN = []
    let prcpListN = []

    c.forEach(function(obj) {
      tavgList.push(obj['tavg']);
      tavgListN.push(obj['tavg']);
    })
    c.forEach(function(obj) {
      prcpList.push(obj['prcp']);
      prcpListN.push(obj['prcp']);
    })
    c.forEach(function(obj) {
      monthList.push(obj['month']);
    })


    return {

      c: c,
      monthList: monthList,
      tavgList: tavgListN,
      prcpList: prcpListN,
      hcInstance: Highcharts,
      chartOptions: {
        title: {
          text: ''
        },
        series: [{
          type: 'column',
          name: 'Percipitation',
          data: prcpList
        }, {
          type: 'line',
          name: 'Temperature',
          data: tavgList
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
}
.chart {
    border: none; //1px solid #000;
    padding: 1.5rem;
    width: 100%;
    overflow-x: visible;

    &__title {
        font-size: 1rem;
        margin-bottom: 0.25rem;
    }
    &__copy {
        font-size: 0.875rem;
    }
}
</style>
