<template>
  <div>
    <Nav />
    <!-- router renders page -->
    <router-view />>
  </div>
</template>
<script>
// imports nav only once
import Nav from "@/components/Nav.vue";
export default {
  name: "app",
  components: {
    Nav: Nav
  }
};
</script>
<style>
</style>
