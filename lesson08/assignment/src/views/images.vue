<template>
  <div id="images">
    <section class=" text-center">
      <h1 class="display-4">Nature Images</h1>
      <div  class="image_template">        
 <section v-if="album">
      <AppImages
      v-for="link in album"
      v-bind:poster='link'
      v-bind:key='link.id'
      >   
      </AppImages>
      
      </section>
  </div>
</section>
</div>
</template>


<script>
    import AppImages from '../../components/AppImages.vue';
    import Btn from '../../components/Btn.vue';
    export default{
        name: 'images',
        components:{
            AppImages,
            Btn
        },
        data () {
            return{
                album: [{ id: 1, title:'test', alt:'alttest', src: require('../assets/img-1.jpg')}, 
                        { id: 2, title:'test', alt:'alttest', src: require('../assets/img-2.jpg')},
                        { id: 3, title:'test', alt:'alttest', src: require('../assets/img-3.jpg')},
                        { id: 4, title:'test', alt:'alttest', src: require('../assets/img-7.jpg')},
                        { id: 5, title:'test', alt:'alttest', src: require('../assets/img-8.jpg')},
                        { id: 6, title:'test', alt:'alttest', src: require('../assets/img-9.jpg')}
                        ]

            }
            
        }
    }
</script>
