<template>
  <div id="images" >

    <b-img v-for="item in images" fluid :key="item.id" :src="item.image" :alt="item.alt">
        
    </b-img>
    
  </div>
</template>

<script>


export default {
  name: 'images',
  
  data () {
    return {
      images: [{
        id:1,
        image: require('@/assets/img/PANO_20190729_184301.vr.jpg'),
        alt: 'Pano Lake Anette'
      },
      {
        id:2,
        image: require('@/assets/img/a20180317_165049320_iOS.jpg'),
        alt: 'GS Racing'
      },
      {
        id:3,
        image: require('@/assets/img/a20180527_193251524_iOS.jpg'),
        alt: 'Kendall Couloir'
      },
      {
        id:4,
        image: require('@/assets/img/a20180623_183319598_iOS.jpg'),
        alt: 'Trout'
      },

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
