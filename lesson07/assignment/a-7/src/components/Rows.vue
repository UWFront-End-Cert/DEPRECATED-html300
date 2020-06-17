<!-- Copyright 2020 Markus Schiffer -->

<template>
    <!-- Bootstrap grid with 4 elements. Uses three sizes: All in a row for large screens, two per row for
         small screens, and only one per row from any smaller screen sizes. -->
    <div class="row">
        <div class="col-lg-3 col-sm-6 col-12 bg-danger p-5" >
            <p class="lead">I come first!</p>
        </div>
        <div class="col-lg-3 col-sm-6 col-12 bg-success p-5">
            <p class="lead">I come second!</p>
        </div>
        <div class="col-lg-3 col-sm-6 col-12 bg-primary p-5">
            <p class="lead">I come third!</p>
        </div>
        <div class="col-lg-3 col-sm-6 col-12 bg-warning p-5">
            <p class="lead">I come fourth!</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Rows'
}
</script>