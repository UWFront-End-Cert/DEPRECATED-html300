<template>
  <div>
    <h1 class="display-1">{{ header }}</h1>
    <img v-for="imageOne in images" class="img" :src="imageOne.src" :title="imageOne.caption" :alt="imageOne.alt"/>

  </div>
</template>

<script>
export default {
  data () {
    return {
      header: 'Images',

        images: [
          {
          img: 'Cross Stitch',
          src: './../images/xstitch.jpg',
          caption: 'Cross Stitch Flat Lay',
          alt: 'Flat lay image of cross stitch, Kindle ereader, cup of tea'
        },
        {
          img: 'Lions',
          src: './../images/lions.jpg',
          caption: 'Crocheted Lions',
          alt: 'Two small crocheted lions'
        },
        {
          img: 'Rainbow',
          src: './../images/rainbow.jpg',
          caption: 'Crocheted Rainbow',
          alt: 'Crocheted rainbow'
        },
        {
          img: 'Close Up Knit',
          src: './../images/knit.jpg',
          caption: 'Moss Stitch Close Up',
          alt: 'Close up view of changing yarn colors in knit'
        }
      ]
   // use a "v-for" loop to iterate through an array of images.
    }
  }
}
</script>
