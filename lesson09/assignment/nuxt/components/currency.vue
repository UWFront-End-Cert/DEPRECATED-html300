<template>
<div id="currency">
  <b-row>
    <section class="container" v-if="money">
      <mconv v-if="money.base=='EUR'" :money="money.rates" :cur='card.cur' />
      <!--<p> {{money}}</p>-->
    </section>
  </b-row>
</div>
</template>

<script>
import mconv from './mconv.vue'

export default {
  components: {
    mconv
  },
  props: {
      money: {Object,
        required: true
      },
    card: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  }

  };

</script>

<style scoped lang='scss'>
@import './main.scss';
</style>
