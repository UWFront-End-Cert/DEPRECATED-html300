<template>
  <div>
    <h1> {{ title | toUpper }} {{imgData.id}}</h1>
    <b-carousel   id="carousel-1"    :interval="4000"   controls
      indicators   background="#ababab"  
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <h2> {{imgData.img}} </h2>
      <!-- Slides image -->
      <b-carousel-slide  class="MyCustomClass"  :img-src= "imgData.imgSrc"  alt="imgDate.img" >
      </b-carousel-slide>
  </b-carousel>

  </div>

</template>

<script>
  export default {
    name: 'food',
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
     border: 5px solid black;
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
