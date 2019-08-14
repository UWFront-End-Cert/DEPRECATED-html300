<template>
  <div class="images">
       <section class=" text-center">
                <h1 class="display-4">Nature Images</h1>
                <div  class="image_template">           
                    <img v-for="link in album" v-bind:src='link' alt="" class="img-fluid img-thumbnail">
                </div>
            </section>
  </div>
</template>
<style lang="scss" scoped>

.image_template{
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    img{
        width: 30%;
        margin-bottom: 1%;
        object-fit: cover; 
    }
}
</style>

<script>
    export default{
        name: 'images',
        data () {
            return{
                album: [require('../assets/img-1.jpg'), 
                        require('../assets/img-2.jpg'),
                        require('../assets/img-3.jpg'),
                        require('../assets/img-4.jpg'),
                        require('../assets/img-5.jpg'),
                        require('../assets/img-6.jpg'),
                        require('../assets/img-7.jpg'),
                        require('../assets/img-8.jpg'),
                        require('../assets/img-9.jpg'),
                        require('../assets/img-10.jpg'),
                        require('../assets/img-11.jpg'),
                        require('../assets/img-12.jpg')
                        ]

            }
            
        }
    }
</script>
