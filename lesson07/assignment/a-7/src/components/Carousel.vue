<!-- Copyright 2020 Markus Schiffer -->
<!-- Bootstrap Carousel for Images page. -->

<template>
    <!-- Uses a carousel to display three images responsively, allowing each image to reach its maximum size. -->
    <div id="carouselIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselIndicators" data-slide-to="1"></li>
            <li data-target="#carouselIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item" v-for="(image, index) in images" v-bind:key="image" :class="{ active: index === 0 }">
                <img class="d-block m-auto image-fluid" :src=image.src :alt=image.alt>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Carousel.vue',
  data() {
      return {
          active: true,
          images: [
              { src: require("../assets/Natural_Night.jpg"),
                alt: "Night by the Lake"},
              { src: require("../assets/Pristine_Landscape.jpg"),
                alt: "A Pristine Mountainous Landscape"},
              { src: require("../assets/sunset.jpg"),
                alt: "A Colorful Sunset"}
          ]
      }
  }
}
</script>