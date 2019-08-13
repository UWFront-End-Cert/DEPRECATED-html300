<template>
  <div class="images">
       <section class=" text-center">
                <h1 class="display-4">Nature Images</h1>
                <div class="image_template">
                    <img src="../../img/img-1.jpg" alt="" class="img-fluid img-thumbnail">
                    <img src="../../img/img-2.jpg" alt="" class="img-fluid img-thumbnail">
                    <img src="../../img/img-3.jpg" alt="" class="img-fluid img-thumbnail">
                    <img src="../../img/img-4.jpg" alt="" class="img-fluid img-thumbnail">
                    <img src="../../img/img-5.jpg" alt="" class="img-fluid img-thumbnail">
                    <img src="../../img/img-6.jpg" alt="" class="img-fluid img-thumbnail">
                    <img src="../../img/img-7.jpg" alt="" class="img-fluid img-thumbnail">
                    <img src="../../img/img-8.jpg" alt="" class="img-fluid img-thumbnail">
                    <img src="../../img/img-9.jpg" alt="" class="img-fluid img-thumbnail">
                    <img src="../../img/img-10.jpg" alt="" class="img-fluid img-thumbnail">
                    <img src="../../img/img-11.jpg" alt="" class="img-fluid img-thumbnail">
                    <img src="../../img/img-12.jpg" alt="" class="img-fluid img-thumbnail">
                </div>
            </section>
  </div>
</template>
<style scoped>
        .image_template{
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
}
img{
        width: 30%;
        margin-bottom: 1%;
        object-fit: cover; 
    }
</style>
