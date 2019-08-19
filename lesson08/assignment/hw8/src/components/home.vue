<template>
  <div>
    <h1> {{ title | toCap }} {{imgData.id}}</h1>
    <b-carousel    :interval="4000"   controls
      indicators   background="#ababab"  
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <h2> {{imgData.img}} </h2>
      <!-- Slides image -->
      <b-carousel-slide  class="MyCustomClass" @click="changeBorder" :img-src= "imgData.imgSrc"  alt="imgData.img" >
      </b-carousel-slide>
  </b-carousel>
  </div>
</template>

<script>
//  import { changeBorder } from './hw8Mixin';
  export default {
    name: 'food',
    size: 1,
    // mixins: [changeBorder],
    props: ['imgData','title'],
    data() {
      return {
        slide: 0,
        sliding: null,
      };
    },
    methods:{
      onSlideStart(){
        this.slide = true;
      },
      onSlideEnd() {
        this.slide = false;
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .MyCustomClass {
     border-width: 5px ;
     border-color:black;
     border-style: solid;
      min-height: 100vh;
      width: 100%;    
      object-fit: cover; 
      top:0;
      bottom: 0;
      left:0;
      right: 0;
      margin: auto;
    }
</style>
