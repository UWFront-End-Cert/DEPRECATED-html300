<template>
  <div>
    <b-carousel   id="carousel-1"   v-model="slide"  :interval="4000"   controls
      indicators   background="#ababab"  
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <h2> Images </h2>
      <!-- Slides image -->
      <b-carousel-slide 
        class="d-block img-fluid w-100 MyCustomClass"  v-for="i in imgList" :key="i.id" 
          :img-src= "i.imgSrc"  alt="i.img" >
    </b-carousel-slide>
  </b-carousel>

    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        message: "carousel slider",
        imgList: [  {id:0, img: "food 1", imgSrc: "http://lorempixel.com/output/food-q-c-640-480-1.jpg"},
                    {id:1, img: "food 2", imgSrc: "http://lorempixel.com/output/food-q-c-640-480-2.jpg"},
                    {id:2, img: "food 3", imgSrc: "http://lorempixel.com/output/food-q-c-640-480-3.jpg"}
                ]
      };
    },
    onSlideStart(){
      this.slide = true
    },
    onSlideEnd() {
      this.slide = false
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .MyCustomClass {
      min-height: 100vh;
      width: 100%;    
      object-fit: cover; 
    }
</style>
