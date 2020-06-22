<template>
<div id="currency">
  <b-row>
    <section class="container" v-if="money">
      <mconv v-if="money.base=='EUR'" :money="money.rates" :area='card.area'/>
    <!--<p> {{money}}</p>-->
</section>
  </b-row>
</div>
</template>

<script>
import axios from 'axios'
import mconv from './mconv.vue'

export default {
  components: {
    mconv
  },
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  data() {

    return {
      url_base: 'http://data.fixer.io/api/latest?access_key=',
      api_key: 'fc2215a03ad52fb8e46911740d64f97a',
      query: '&symbols=',
      us: 'USD',
      eu: 'EUR',
      loading: true,
      money: null,
      //card:this.card,
      errored: false,
    }
  },
  mounted () {
  axios
    .get(`${this.url_base}${this.api_key}${this.query}${this.card.cur},${this.us},${this.eu}`)
//.then(response => (this.money = response.data))
    .then(response => {console.log(response); (this.money = response.data)})
    .catch(error => {
      console.log(error)
      this.errored = true
    })
    .finally(() => this.loading = false)
  }

  };


</script>

<style scoped lang='scss'>
@import './main.scss';

</style>
