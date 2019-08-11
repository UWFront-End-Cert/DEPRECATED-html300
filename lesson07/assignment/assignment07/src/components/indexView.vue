<template>
    <main class="main">
    <h2>Button ToolTip and Toggle</h2>
    <!-- builds the form  -->
    <form id="form2">
        <div class="container">
          <div class="row">
            <div class="col">
              <h3 v-if="show">Welcome to the Matrix</h3>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-2"></div>
            <div class="col-3">
              <!-- buttons to show toop tip and to enable disabled button -->
              <button v-on:click="redBtn($event)" id="red-btn" class="btn btn-danger" value="Submit" data-toggle="tooltip" title="Click the Blue Pill to Activate Me"></button>
              <button v-on:click="blueBtn($event)" id="blue-btn" class="btn btn-primary" value="Blue Pill"></button>
            </div>
          </div>
        </div>
    </form>
  </main>
</template>
<script>
export default {
 name: 'indexView',
   data() {
     return {
    counter: 0,
    show: false
     }
  },
    methods: {
    redBtn: function (e) {
      e.preventDefault()
      if(this.counter === 1) {
      this.show = true;
      this.counter = 0;
      }
    },
    blueBtn: function (e) {
      e.preventDefault()
      this.counter = 1;
      this.show = false;
    }
  }

  }

</script>

<style scoped>

</style>