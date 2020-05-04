<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="10000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd">

    <b-carousel-slide
       v-for="item in card"
       :key="item.id"
       :img-alt="item.text"
       :img-src="getImgUrl(item.images)">
     </b-carousel-slide>

    </b-carousel>
  </div>
</template>

<script>
export default {
props: {
card: {
type: Array,
required:true
}
},
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
  getImgUrl: function(pic){
  return require('@/assets/'+pic)
  },
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  }
};
</script>


<style scoped lang='scss'>
@import './src/main.scss';

  .carousel {
  width: 28rem;
  overflow: hidden;
  }
  .carousel-item {
  object-fit: cover;
  height: 18.75rem;
  width: 28rem;
  }
</style>
