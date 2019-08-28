<template>
  <!-- Creates header and image that will be used on all pages -->

  <div id="app">
    <!-- Set header text and apply background image from HeaderSlot component -->
    <HeaderSlot>
        <div slot="slot1">
          <slot>Hello World!</slot>
        </div>
    </HeaderSlot>
    <!-- Create and style nav elements from the nav array -->
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="navbar-nav" v-for="link in nav">
        <router-link :to="{ name: link.name }" class="nav-link">{{link.display}}</router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderSlot from './components/HeaderSlot.vue';
export default {
  name: 'App',
  components:{
    HeaderSlot
  },
  //Array of pages to create navigation
  data () {
    return {
      nav: [
        {name: 'Hello', display: 'Home'},
        {name: 'Teams', display: 'Teams'},
        {name: 'Rules', display: 'Rules'},
        {name: 'Contact', display: 'Contact'}
      ]
    }

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
