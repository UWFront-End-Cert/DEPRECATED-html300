<template>
  <div id="app_images">
    <nav_bar/>
    <img v-for="image in images" :src="image.url" :alt="image.alt"/>
    
  </div>
</template>

<script>
import nav_bar from "./components/nav_bar.vue";

export default {
  name: 'app_images',
  components: {
    nav_bar
  },
  data () {
    return {
      images: [
        { url: "./src/assets/PANO_20190729_184301.vr.jpg", alt: 'Pano Lake Anette' },
        { url: "./src/assets/a20180317_165049320_iOS.jpg", alt: 'GS Racing'},
        { url: './src/assets/a20180527_193251524_iOS.jpg', alt: 'Kendall Couloir'},
        { url: './src/assets/a20180623_183319598_iOS.jpg', alt: 'GS Racing'},
      ]
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
  margin-top: 0px;
  
}

h1, h2 {
  font-weight: normal;
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


