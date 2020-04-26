<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Jumbotron msg="Bootstrap/Vue Assignment"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Jumbotron from '@/components/Jumbotron.vue'

export default {
  name: 'Home',
  components: {
    Jumbotron
  }
}
</script>
