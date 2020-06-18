<!-- Copyright 2020 Markus Schiffer -->
<!-- Bootsrap grid for Grid page. -->

<template>
    <!-- Bootstrap grid with 4 elements. Uses three sizes: All in a row for large screens, two per row for
         small screens, and only one per row from any smaller screen sizes. -->
    <div class="row">
        <div class="col-lg-3 col-sm-6 col-12 p-5" v-for="obj in numbering" v-bind:key="obj" :class="obj.color">
            <p class="lead">I come {{ obj.number }}!</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Rows',
  data() {
      return {
          numbering: [
              { number: "first",
                color: "bg-danger" },
              { number: "second",
                color: "bg-success" },
              { number: "third", 
                color: "bg-primary" },
              { number: "fourth",
                color: "bg-warning" }
          ]
      }
  }
}
</script>