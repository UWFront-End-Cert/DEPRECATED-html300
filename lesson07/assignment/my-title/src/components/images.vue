<template>
  <div>
    <h1 class="display-1">{{ header }}</h1>
    <div class="col-lg-2">
      <img v-for="imageOne in images" :src="getPic(images)" :title="imageOne.caption" :alt="imageOne.alt"/>
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
      ],
      methods: {
        // ERROR not defined on the instance -- where would this need to be defined? Here in methods?
        getPic(images) {
          return './../images/' + this.img[images] + '.jpg';
        }
      }
   // use a "v-for" loop to iterate through an array of images.
    }
  }
}
</script>
