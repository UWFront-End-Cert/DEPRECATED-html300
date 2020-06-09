<template lang="html">
  <div class="fan-title">
    <h1>Fan Art</h1>
    <h4>Photos from butterfly Fans</h4>
  </div>

  <div class="container" id="bphoto">
    <vue-gallery :photos="photos"></vue-gallery>
  </div>

</template>

<script>
import Index from '@/pages/index'

export default {
  components: {
    fanArt
  }
}
Vue.component('vue-gallery', {
  props: ['photos'],
  data: function () {
    return {
      activePhoto: null
    }
      },
  template: `
    <div class="vueGallery">

    <div class="thumbnails">
      <div
           v-for="(photo, index) in photos"
           :src="photo"
           :key="index"
           @click="activePhoto = index"
           :class="{'active': activePhoto == index}"
           :style="'background-image: url('+photo+');'"
           >
      </div>
    </div>
  </div>`
 })

new Vue({
  el: '#bphoto',
  data: {
    photos: [
      'https://images.unsplash.com/photo-1557912407-eb2900cf49e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
      'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      'https://images.unsplash.com/photo-1571030905044-7458c2a7ac24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      'https://images.unsplash.com/photo-1512384581201-653524dbe0c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=309&q=80',
      'https://images.unsplash.com/photo-1512384714738-48bc147e56a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=364&q=80',
      'https://images.unsplash.com/photo-1495232416988-d26458b7a5fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=317&q=80',
      'https://images.unsplash.com/photo-1548984363-d6e54c098bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      'https://images.unsplash.com/photo-1540256817643-88ca55778eb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
      'https://images.unsplash.com/photo-1560263816-d704d83cce0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
      'https://images.unsplash.com/photo-1486916856992-e4db22c8df33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80'
    ]
  }
});

</script>

<style lang="css" scoped>
$brand: #5c4084;

body {
  background-color: $brand;
  padding: 25px;
}
.container {
  padding: 6px;
  background-color: #fff;
  border-radius: 8px;
  max-width: 800px;
  box-shadow: 0 5px 8px #0000007a;
}
.fan-title {
  text-align: center;
  h1 {
    background: -webkit-linear-gradient(#fff, lighten($brand, 20%));
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    text-align: center;
    margin: 0 0 5px 0;
    font-weight: 900;
    font-size: 4rem;
    color: #fff;
  }
  h4 {
    color: lighten($brand, 20%);
    text-align: center;
    margin: 0 0 35px 0;
    font-weight: 400;
    font-size: 24px;
  }
}


  .thumbnails {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    grid-gap: 5px;

    div {
      width: 100%;
      border: 2px solid #fff;
      outline: 2px solid #fff;
      cursor: pointer;
      padding-bottom: 65%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      opacity: 1;



      &:hover {
        opacity: 0.6;
      }
      &.active {
        outline-color: magenta;
        opacity: 1;
      }

    }
  }


</style>
