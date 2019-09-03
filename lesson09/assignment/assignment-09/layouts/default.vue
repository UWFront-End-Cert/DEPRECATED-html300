<template>
  <!-- Adds header and navigation to all pages -->
  <div id="app">
      <HeaderSlot />
      <Nav />
      <Nuxt />
  </div>
</template>

<script>
import HeaderSlot from '~/components/HeaderSlot.vue'
import Nav from '~/components/Nav.vue'
export default {
  components: {
    HeaderSlot,
    Nav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
