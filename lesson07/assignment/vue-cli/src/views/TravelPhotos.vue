
<template>
  <div>
    <app-photos></app-photos>
  </div>
</template>

export default {
  name: 'TravelPhotos'
}

<script>
  //import your components here
  import Images from '@/components/Images.vue'
  export default {
    components: {
      'app-photos': Images
    }
 }
</script>
