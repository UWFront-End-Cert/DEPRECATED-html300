<!--https://stackoverflow.com/questions/56004640/cannot-display-images-in-vuejs -->
<!--https://top10webjs.com/2019/05/07/vue-js-cannot-display-images-in-vuejs/ -->

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
        :caption="item.caption"
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
      carouselItems: [
        {
          id: 1,
          caption: "Memories",
          image: require("@/assets/belize.png"),
          text: "Picture of Belize"
        },
        {
          id: 2,
          caption: "Costa Rica - Manuel Antonio National Park",
          image: require("@/assets/costarica.png"),
          //"@/assets/costarica.jpg",
          //"https://picsum.photos/1024/480/?image=54"
          text: "Picture of Costa Rica"
        },
        {
          id: 3,
          caption: "Memories",
          image: require("@/assets/croatia.png"),
          //"@/assets/croatia.jpg",
          text: "Picture of Croatia"
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
