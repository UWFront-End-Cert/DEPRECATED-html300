<template lang="html">
  <div class="">
    <h1>Bootstrap Grid</h1>
    <!-- Grid -->
    <div class="container">
      <div class="row">
        <div class="col-sm-4">text</div>
        <div class="col-sm-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </div>
      <div class="row">
        <div class="col-sm">text</div>
        <div class="col-sm">text</div>
        <div class="col-sm">text</div>
        <div class="col-sm">text</div>
        <div class="col-sm">text</div>
        <div class="col-sm">text</div>
      </div>
      <div class="row">
        <div class="col-sm-12">text</div>
      </div>
      <div class="row">
        <div class="col-sm-4">text</div>
        <div class="col-sm-4">text</div>
        <div class="col-sm-4">text</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
.container {
  background-color: coral;
}

.row {
  min-height: 5rem;
}

.row > div {
  border: 1px solid black;
}

.row > div:nth-child(2n+1) {
  background-color: lightblue;
}

.row > div:nth-child(2n) {
  background-color: dodgerblue;
}
</style>
