<template>
  <div class="wrapper">
    <section class="container" v-if="countries">
<p> Average Weather Data Collected from {{countries.meta.start}} to {{countries.meta.end}} </p>
<!--</p> <br>  <p>-->
    <!--<p>{{countries.meta}}</p>
    <p>{{countries.data}}</p> -->
        <chart :country="countries.data"/>
    </section>
  </div>
</template>

<script>
import chart from './chart.vue'
import axios from 'axios'

export default {
  components: {
    chart
  },
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      url_base: 'https://api.meteostat.net/v2/point/',
      loading: true,
      countries: null,
      errored: false
    }
  },
  mounted () {
  axios
    .get(`${this.url_base}climate?lat=${this.card.lat}&lon=${this.card.lon}`)
    .then(response => (this.countries = response.data))
    .catch(error => {
      console.log(error)
      this.errored = true
    })
    .finally(() => this.loading = false)
  }

}
</script>

<style scoped lang='scss'>
.container {
  min-height: 100vh;
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  flex-wrap: wrap;
}
p{
  padding:0;
  margin:0;
  display:block;
}
</style>



<!--
station list - use these lat/long: https://open.meteostat.net/stations.csv
data: https://api.meteostat.net/v2/point/climate?lat=9.9667&lon=-84.8333
docs: https://dev.meteostat.net/api/point/climate
api key: dFowqinXA3rLXHeaEYD18QftXkGEYEnT
-->
