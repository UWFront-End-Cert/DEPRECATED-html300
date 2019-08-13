// gallery for Noms and Sippin's images
<template>
  <div class="gallery">
    <div class="gallery-panel" v-for="photo in photos" :key="photo.id">
      <!-- supposed ot allow user to see full size image. BROKEN-->
      <router-link :to="`/photo/${photo.id}`">
        <img :src="thumbUrl(photo.filename)" />
      </router-link>
    </div>
  </div>
</template>

<script>
import photos from "@/photos.json";
export default {
  name: "Gallery",
  data() {
    return {
      photos
    };
  },
  // this function allows photos ot appear. wrapped in router allows for larger image to be shown
  methods: {
    thumbUrl(filename) {
      return require(`@/assets/gallery/thumbnails/${filename}`);
    }
  }
};
</script>

<style>
/* creates grid... MAKE SQUARE */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
  max-width: 80rem;
  margin: 5rem auto;
  padding: 0 5rem;
}
.gallery-panel img {
  width: 100%;
  height: 22vw;
  object-fit: cover;
  border-radius: 0.75rem;
}
</style>
