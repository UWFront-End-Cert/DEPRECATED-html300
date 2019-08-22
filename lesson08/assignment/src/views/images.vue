<template>
  <div id="images">
    <section class=" text-center">
      <h1 class="display-4">Nature Images</h1>        

      <AppImages :album="album" />
      
      
</section>
</div>
</template>


<script>
    import AppImages from '../../components/AppImages.vue';
    export default {
        name: 'images',
        data(){
          
          return{

            album: 
            [{ title:'Beautiful Waterfall', info:'(Click on the Image to change the border)', alt:'Beautiful Waterfall', src: require('../../src/assets/img-1.jpg'), isActive: false}, 
            { title:'Deep in the Forest', info:'(Click on the Image to change the border)', alt:'Deep in the Forest', src: require('../../src/assets/img-2.jpg'), isActive: false},
            { title:'Stunning Mountains', info:'(Click on the Image to change the border)', alt:'Stunning Mountains', src: require('../../src/assets/img-3.jpg'), isActive: false},
            { title:'Lost in the Woods', info:'(Click on the Image to change the border)', alt:'Lost in the Woods', src: require('../../src/assets/img-7.jpg'), isActive: true},
            { title:'Lonely Tree', info:'(Click on the Image to change the border)', alt:'Lonely Tree', src: require('../../src/assets/img-8.jpg'), isActive: false},
            { title:'Sunset in Jungle', info:'(Click on the Image to change the border)', alt:'Sunset in Jungle', src: require('../../src/assets/img-9.jpg'), isActive: false}
            ],
                     

            }
          },
          components:{
            AppImages
        },
        methods:{
         addBorder: function(){
        this.link.isActive = true;
      }}
    }
</script>
