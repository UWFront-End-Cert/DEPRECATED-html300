<template>
  <div>
    <h1 class="display-1">{{ header }}</h1>

  <div id="accordion">
    <h2>{{ subhead }}</h2>
    <div class="accordion-item" v-for="content in contents" >
      <a @click="toggle"></a>
<!--manual accordion to get it working THEN do iteration through blurbs-->
    </div>
  </div>

  </div>
</template>



<script>
//what are all these examples showing html(pug), css(stylus), etc...and do I need to install npm for accordion as well as grid?
export default {
  data () {
    return {
      header: 'Accordion',
      subhead: 'More Content',
      contents: [{
        title: 'Blurb One',
        description: 'Croque monsieur fromage frais roquefort. Dolcelatte cheese slices bocconcini lancashire taleggio stinking bishop edam cream cheese. Cottage cheese babybel emmental rubber cheese babybel rubber cheese cottage cheese bavarian bergkase. Paneer cheddar fromage chalk and cheese paneer.',
        active: false
        },
        {
          title: 'Blurb Two',
          description: 'Croque monsieur fromage frais roquefort. Dolcelatte cheese slices bocconcini lancashire taleggio stinking bishop edam cream cheese. Cottage cheese babybel emmental rubber cheese babybel rubber cheese cottage cheese bavarian bergkase. Paneer cheddar fromage chalk and cheese paneer.',
          active: false
        },
        {
          title: 'Blurb Three',
          description: 'Croque monsieur fromage frais roquefort. Dolcelatte cheese slices bocconcini lancashire taleggio stinking bishop edam cream cheese. Cottage cheese babybel emmental rubber cheese babybel rubber cheese cottage cheese bavarian bergkase. Paneer cheddar fromage chalk and cheese paneer.',
          active: false
        }]
  // use a "v-for" to iterate through an object to fill out the content in an accordion.
  }
    // methods: {
    //   toggle: function() {
    }
  }

</script>
