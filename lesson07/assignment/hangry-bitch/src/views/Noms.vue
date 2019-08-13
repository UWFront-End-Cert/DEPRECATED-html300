<template>
  <div class="noms">
    <h1 class="display-2 text-sm-center text-lg-right">{{title}}</h1>
    <Gallery />
    <Photo />
  </div>
</template>

<script>
import Gallery from "@/components/Gallery.vue";
import Photo from "@/components/Photo.vue";
export default {
  name: "Noms",
  components: {
    Gallery,
    Photo
  },
  data: () => ({
    title: "Noms",
    tagLine: "What's cookin' good lookin'?"
  })
};
</script>

// Vue grid photo gallery tutorial https://travishorn.com/creating-a-photo-gallery-with-vue-css-grid-3e0a3dd25285
