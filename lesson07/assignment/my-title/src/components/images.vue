<template>
  <div>
    <h1 class="display-1">{{ header }}</h1>
    <div class="col-md-2">
      <img v-for="imageOne in images" class="img" :src="getPic(imageOne.src)" :title="imageOne.caption" :alt="imageOne.alt"/>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      header: 'Images',
// will need a function to return the source
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
  //https://medium.com/@renatello/how-to-bind-img-src-in-vue-js-5690ac89c1bb

  }

</script>

<style>
  img {
    height: auto;
    width: 33%;
  }
</style>
