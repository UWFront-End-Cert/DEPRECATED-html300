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
      @sliding-end="onSlideEnd"
    >


      <b-carousel-slide
        v-for="item in carouselItems"
        :key="item.id"
        :img-alt="item.text"
        :img-src="item.image"
      ></b-carousel-slide>

    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
    carouselItems:
     [
      {
        id: 1,
        image: require("@/assets/belize.png"),
        text: "Picture of Belize"
      },
      {
        id: 2,
        image: require("@/assets/costarica.png"),
        text: "Costa Rica - Manuel Antonio National Park"
      },
      {
        id: 3,
        image: require("@/assets/croatia.png"),
        text: "Picture of Croatia"
      },
      {
        id: 4,
        image: require("@/assets/italy.png"),
        text: "Picture of Italy"
      },
      {
        id: 5,
        image: require("@/assets/thaibeach.png"),
        text: "Picture of beach in Thailand"
      }
    ],
      slide: 0,
      sliding: null
    };
  },
  methods: {
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
  .carousel {
  width: 28rem;
  overflow: hidden;
  }
  .carousel-item {
  object-fit: cover;
  height: 19rem;
  width: 28rem;
  }
</style>
