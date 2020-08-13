<template>
  <div>
    <h1 class="display-1">{{ header }}</h1>
    <img v-for="image in images" class="img" src="{{ imageOne.src }}" title="{{ imageOne.caption}}" alt="{{ imageOne.alt }}"/>

  </div>
</template>

<script>
export default {
  data () {
    return {
      header: 'Images',

        images: [
          {
          imageOne: 'Cross Stitch',
          src: './src/images/xstitch.jpg',
          caption: 'Cross Stitch Flat Lay',
          alt: 'Flat lay image of cross stitch, Kindle ereader, cup of tea'
        },
        {
          imageTwo: 'Lions',
          src: './src/images/lions.jpg',
          caption: 'Crocheted Lions',
          alt: 'Two small crocheted lions'
        },
        {
          imageThree: 'Rainbow',
          src: './src/images/rainbow.jpg',
          caption: 'Crocheted Rainbow',
          alt: 'Crocheted rainbow'
        },
        {
          imageFour: 'Close Up Knit',
          src: './src/images/knit.jpg',
          caption: 'Moss Stitch Close Up',
          alt: 'Close up view of changing yarn colors in knit'
        }
      ]
   // use a "v-for" loop to iterate through an array of images.
    }
  }
}
</script>
