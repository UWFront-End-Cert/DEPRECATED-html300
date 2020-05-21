<template>
  <div id="app">
    <h1>{{ msg }}</h1>
  </div>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Vue is Awesome',
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1{
  font-weight: bold;
  text-align: left;
  margin-top: 0;
  padding: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
