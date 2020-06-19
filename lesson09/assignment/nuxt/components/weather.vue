<template>
<div id="weather">
  <b-row>
    <b-col sm="12">
  <h1>Weather</h1>
    </b-col>

  </b-row>
</div>
</template>

<script>
export default {

  props: {
    card: {
      type: Object,
      required: true
    }
  },

  };
</script>

<style scoped lang='scss'>
@import './main.scss';

</style>
