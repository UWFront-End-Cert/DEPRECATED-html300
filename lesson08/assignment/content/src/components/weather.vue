<template>
<div id=card.id>
  <div id="weather-modal" class="modal fade">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{card.location}}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Weather: </p> <!--{{card.location}}-->

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
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

export default {
data() {
    return {
   name: this.location,
   description: '',
   price: 0,
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

#weather-modal{
position: absolute;
}

h3{
display:inline;
}

</style>
