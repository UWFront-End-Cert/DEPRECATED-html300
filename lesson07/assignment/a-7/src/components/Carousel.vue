<!-- Copyright 2020 Markus Schiffer -->

<template>
    <!-- Uses a carousel to display three images responsively, allowing each image to reach its maximum size. -->
    <div id="carouselIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselIndicators" data-slide-to="1"></li>
            <li data-target="#carouselIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img class="d-block m-auto image-fluid" src="../images/Natural_Night.jpg" alt="Night by the Lake">
            </div>
            <div class="carousel-item">
            <img class="d-block m-auto image-fluid" src="../images/Pristine_Landscape.jpg" alt="A Pristine Mountainous Landscape">
            </div>
            <div class="carousel-item">
            <img class="d-block m-auto image-fluid" src="../images/sunset.jpg" alt="A Colorful Sunset">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Carousel.vue'
}
</script>