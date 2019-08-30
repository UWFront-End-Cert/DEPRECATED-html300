<template>
  <div id="images">
    <section class=" text-center">
      <my-header >
        <h1 slot="header" class="display-4">{{ msg | capitalize}}</h1> 
        <p slot="subtitle">Images of our planet</p>
      </my-header>       

      <AppImages :album="album" />
      
      
</section>
</div>
</template>


<script>
  // Importing components
    import AppImages from '../../components/AppImages.vue';
    import myHeader from '../../components/MyHeader.vue';
    export default {
        name: 'images',
        data(){
          // returning data
          return{
            msg: 'Nature Images',

            album: 
            [{ title:'Beautiful Waterfall', info:'(Click on the Image to change the border)', alt:'Beautiful Waterfall', src: require('../../src/assets/img-1.jpg'), isActive: false}, 
            { title:'Deep in the Forest', info:'(Click on the Image to change the border)', alt:'Deep in the Forest', src: require('../../src/assets/img-2.jpg'), isActive: false},
            { title:'Stunning Mountains', info:'(Click on the Image to change the border)', alt:'Stunning Mountains', src: require('../../src/assets/img-3.jpg'), isActive: false},
            { title:'Lost in the Woods', info:'(Click on the Image to change the border)', alt:'Lost in the Woods', src: require('../../src/assets/img-7.jpg'), isActive: false},
            { title:'Lonely Tree', info:'(Click on the Image to change the border)', alt:'Lonely Tree', src: require('../../src/assets/img-8.jpg'), isActive: false},
            { title:'Sunset in Jungle', info:'(Click on the Image to change the border)', alt:'Sunset in Jungle', src: require('../../src/assets/img-9.jpg'), isActive: false}
            ],
                     

            }
          },
          //Naming components
          components:{
            AppImages,
            myHeader
        },
        
        // Adding filter to capitalise header
        filters: {
          capitalize: function (value) {
            value = value.toString()
            return value.toUpperCase()
  }
}
    }
</script>
<style scoped>
/* Some styles to look better*/
 h1{
  margin-top: 2%;
  } p{
    font-style:italic;
    color: grey;
  }
</style>