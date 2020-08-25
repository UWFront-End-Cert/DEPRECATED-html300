<template>
  <div>
    <h1 class="display-1">{{ header }}</h1>
    <div class="col-lg-2">
      <!--v-for directive renders a list of items in array, imageOne in images loops through that array//:src function refers to method created to pull images from source directory//dot notation calls on key values in objects-->
      <img v-for="imageOne in images" class="img-fluid rounded m-2" :src="getPic(imageOne.src)" :title="imageOne.caption" :alt="imageOne.alt"/>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
  //these are the variables that are places in the HTML sections that change based on conditional statements
      header: 'Images',
        images: [
          {
          img: 'Cross Stitch',
          src: 'xstitch.jpg',
          caption: 'Cross Stitch Flat Lay',
          alt: 'Flat lay image of cross stitch, Kindle ereader, cup of tea'
        },
        {
          img: 'Lions',
          src: 'lions.jpg',
          caption: 'Crocheted Lions',
          alt: 'Two small crocheted lions'
        },
        {
          img: 'Rainbow',
          src: 'rainbow.jpg',
          caption: 'Crocheted Rainbow',
          alt: 'Crocheted rainbow'
        },
        {
          img: 'Close Up Knit',
          src: 'knit.jpg',
          caption: 'Moss Stitch Close Up',
          alt: 'Close up view of changing yarn colors in knit'
        }
      ]
    }
  },
  methods: {
    getPic(pic) {
      return require(`@/images/${pic}`)
      }
    }
  }

</script>

<style>
  img {
    /* height: auto;
    width: 33%; */
  }
</style>
