<template>
<div>
        <h2>Images</h2>
    <!-- Single Responsive Image  -->
    <div class="container" width="50%">
        <img v-for="image in images" :key=image.id :src=image.url :alt=image.alt class="img-fluid">
      <!-- <img src="../assets/q11.jpg" class="img-fluid" alt="Responsive image"> -->
    </div>

</div>
</template>

<script>
export default {
 name: 'imageView',   
 data () {
        return {
            images: [
                { url: '/src/assets/q11.jpg', alt: 'Sunset', id:0 },
                { url: '/src/assets/q22.jpg', alt: 'Seattle', id:1 },
                { url: '/src/assets/q222.jpg', alt: 'Market', id:2 },
            ]
        }
      }

}

</script>

<style scoped>

</style>