<template>
  <div id="app">
    <TheNavigation />
    <router-view :key="$route.path" />
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation";

export default {
  components: {
    TheNavigation
  }
};

//import TheFooter from "@/components/TheFooter";
//export default {
//  components: {
//    TheFooter
//  }
//};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 0.5rem;
}

#nav a.router-link-exact-active {
  color: red;
}
</style>
