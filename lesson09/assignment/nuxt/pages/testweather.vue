<template>
  <div class="wrapper">
    <section class="container" v-if="countries">
<p> Average weather from {{countries.meta.start}} to {{countries.meta.end}} </p>
  <!--  <p>{{countries.data}}</p> -->
        <chart :country="countries.data"/>
    </section>
  </div>
</template>

<script>
import chart from '~/components/chart.vue'
import axios from 'axios'

export default {
  components: {
    chart
  },
  data() {
    return {
      loading: true,
      countries: null,
      errored: false
    }
  },
  mounted () {
  axios
    .get('https://api.meteostat.net/v2/point/climate?lat=9.9667&lon=-84.8333')
    .then(response => (this.countries = response.data))
    .catch(error => {
      console.log(error)
      this.errored = true
    })
    .finally(() => this.loading = false)
  }

}
</script>

<style>
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

.heading {
  text-align: center;
  font-size: 2rem;
  color: #555;
  margin: 2rem auto;
}

img {
  max-width: 150px;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>



<!--
station list - use these lat/long: https://open.meteostat.net/stations.csv
data: https://api.meteostat.net/v2/point/climate?lat=9.9667&lon=-84.8333
docs: https://dev.meteostat.net/api/point/climate
api key: dFowqinXA3rLXHeaEYD18QftXkGEYEnT
-->
