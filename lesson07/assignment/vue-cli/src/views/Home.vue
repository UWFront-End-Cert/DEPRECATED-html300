<template>
  <div class='Home'>
    <app-header></app-header>
	<app-sidebar></app-sidebar>
  </div>
</template>

<script>
  //import your components here
  import Header from '@/components/Jumbotron.vue'
  import SideBar from '@/components/Carousel.vue'
  export default {
  name: 'Home',
    components: {
      'app-header': Header,
      'app-sidebar' : SideBar
    }
 }
</script>
