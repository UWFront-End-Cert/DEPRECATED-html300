<template>
  <div>
    <h1 class="display-1">{{ header }}</h1>

  <div>
    <h2>{{ subhead }}</h2>

<!--manual accordion to get it working THEN do iteration through blurbs-->
<!--use aria-expanded to convey state of collapsable elements to screen readers and other assistive technology-->
<!--each card groups together similar information-->

  <div class="accordion" id="accordion">
<!--v-for content on contets dynamic cards that will loop through data in array-->
<!--used bootstrap-vue elements-->
<!--key element is used to "hint" to the DOM to identify vnodes-->
<!--use dot notation to access data, including id to generate a unique id for each item to be toggled-->
  <b-card v-for="content in contents" v-bind:key="content.id" >
    <b-card-header id="headingTwo">
      <h3><b-button type="button" v-b-toggle="'content-' + content.id" aria-expanded="false" aria-controls="collapseTwo">{{ content.title }}</b-button>
      </h3>
    </b-card-header>
    <b-collapse :id="'content-' + content.id" accordion="accordionOne" aria-labelledby="headingTwo">
      <b-card-body>{{ content.quote }}</b-card-body>
    </b-collapse>
  </b-card>
  </div>
</div>
</div>
</template>



<script>
export default {
  data () {
    return {
  //these are the variables that are places in the HTML sections that change based on conditional statements
      header: 'Accordion',
      subhead: 'Movie Quotes',
      contents: [
        {
          id: 1,
          title: 'Back to the Future',
          quote: 'How could I have been so careless. One point twenty-one gigawatts. Tom, how am I gonna generate that kind of power, it cant be done, it cant. It was meant to be. Anyway, if Grandpa hadnt hit him, then none of you would have been born. Go. Uh, plutonium, wait a minute, are you telling me that this suckers nuclear? Oh hey, Biff, hey, guys, how are you doing?.'
        },
        {
        id: 2,
        title: 'Back to the Future II',
        quote: 'No. Our only chance to repair the present is in the past, at the point where the timeline skewed into this tangent. In order to put the universe back as we remember it and get back to our reality, we have to find out the exact date and specific circumstances of how, when, and where young Biff got his hands on that sports almanac.'
        },
        {
        id: 3,
        title: 'Back to the Future III',
        quote: 'It means your future hasnt been written yet. No ones has. Your future is whatever you make it, so make it a good one. Both of you.'
        },

      ],
  }

    }
  }

</script>
