<template>
  <div>
    <h1 class="display-1">{{ header }}</h1>

  <div id="accordion">
    <h2 class="text-center bg-secondary">{{ subhead }}</h2>
    <div class="accordion-item" v-for="content in contents">

    </div>
  </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      header: 'Accordion',
      subheader: 'More Content',
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
    methods: {
      expand: function(e) {
        
      }
    }
  }
}
</script>
