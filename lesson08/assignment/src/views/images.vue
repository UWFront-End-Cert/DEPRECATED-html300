<template>
  <div id="images">
    <section class=" text-center">
      <h1 class="display-4">Nature Images</h1>        

      <AppImages />
      
</section>
</div>
</template>


<script>
    import AppImages from '../../components/AppImages.vue';
    export default {
        name: 'images',
        components:{
            AppImages
        }
      }
</script>
