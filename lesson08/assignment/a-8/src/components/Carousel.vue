<!-- Copyright 2020 Markus Schiffer -->
<!-- Bootstrap Carousel for Images page. -->

<template>
    <!-- Uses a carousel to display three images responsively, allowing each image to reach its maximum size. -->
    <div id="carouselIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselIndicators" v-for="image in images" :key="image.id" :class="{ active: image.id === 0 }" :data-slide-to="image.id"></li>
        </ol>
        <div class="carousel-inner">
            <carimage
                v-for="pic in images"
                v-bind:content="pic"
                v-bind:key="pic.id"
            >
            </carimage>
            <!-- <div class="carousel-item" v-for="image in images" :key="image.id" :class="{ active: image.id === 0 }">
                <img class="d-block m-auto image-fluid" :src=image.src :alt=image.alt>
            </div> -->
        </div>
    </div>
</template>

<script>
import carimage from '@/components/Carousel-Image.vue'

export default {
  name: 'Carousel.vue',
  components: {
    carimage
  },
  data() {
      return {
          active: true,
          images: [
              { id: 0,
                src: require("../assets/Natural_Night.jpg"),
                alt: "Night by the Lake",
                title: "Night by the Lake"},
              { id: 1,
                src: require("../assets/Pristine_Landscape.jpg"),
                alt: "A Pristine Mountainous Landscape",
                title: "A Pristine Mountainous Landscape"},
              { id: 2,
                src: require("../assets/sunset.jpg"),
                alt: "A Colorful Sunset",
                title: "A Colorful Sunset"}
          ]
      }
  }
}
</script>