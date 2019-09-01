<template>
<section>
<MarketHeader />
<section class="markets">
<h2>Miles from City Center and Market Name</h2>
    <section v-if="markets">
        <Markets
          v-for="market of markets"
          :key="market.id"
          :market="market"
        />
    </section>
    </section>
</section>
</template>

<script>
import Markets from '../components/Markets'
import MarketHeader from '../components/MarketHeader'
import axios from 'axios'

export default {
    components: {
        Markets,
        MarketHeader
    },

  data() {
    return {
      errored: false,
      loading: true,
      markets: null
    }
  },
  mounted () {
  axios
    .get('https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=98174')
    .then(response => (this.markets = response.data.results))
    .catch(error => {
      console.log(error)
      this.errored = true
    })
    .finally(() => this.loading = false)
  }
  
}
</script>

<style scoped>
.markets {
    display: flex;
    flex-flow: row wrap;
}

.market {
    box-sizing: border-box;
    padding: 10px;
    border: 2px solid #cccccc;
    box-shadow: 0 2px 2px #aaaaaa;
    margin: 10px;

}

</style>