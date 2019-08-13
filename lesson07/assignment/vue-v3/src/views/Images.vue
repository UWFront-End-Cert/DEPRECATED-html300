<template>
  <div id="images" >
   
<img v-for="image in images" :src="image.url" :alt="image.alt"/>

    
  </div>
</template>

<script>


export default {
  name: 'images',
  
  data () {
    return {
      
      images: [
        { url: '@/public/img/PANO_20190729_184301.vr.jpg', alt: 'Pano Lake Anette'},
        { url: "./src/assets/a20180317_165049320_iOS.jpg", alt: 'GS Racing'},
        { url: "./src/assets/a20180527_193251524_iOS.jpg", alt: 'Kendall Couloir'},
        { url: "./src/ssets/a20180623_183319598_iOS.jpg", alt: 'GS Racing'},
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
