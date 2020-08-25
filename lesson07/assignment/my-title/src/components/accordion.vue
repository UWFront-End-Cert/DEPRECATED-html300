<template>
  <div>
    <h1 class="display-1">{{ header }}</h1>

  <div id="accordion">
    <h2>{{ subhead }}</h2>

<!--manual accordion to get it working THEN do iteration through blurbs-->
<!--use aria-expanded to convey state of collapsable elements to screen readers and other assistive technology-->
<!--each card groups together similar information-->

<div class="accordion" id="accordion">
<div class="card">
  <div class="card-header" id="headingOne">
    <h3>
      <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Back to the Future
      </button>
    </h3>
  </div>

  <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
    <div class="card-body">
      How could I have been so careless. One point twenty-one gigawatts. Tom, how am I gonna generate that kind of power, it can't be done, it can't. It was meant to be. Anyway, if Grandpa hadn't hit him, then none of you would have been born. Go. Uh, plutonium, wait a minute, are you telling me that this sucker's nuclear? Oh hey, Biff, hey, guys, how are you doing?.
    </div>
    </div>
    </div>
    </div>
  </div>
<!--dynamic cards that will loop through data in array-->
<!--used bootstrap-vue elements-->
  <b-card v-for="content in contents" v-bind:key="content.id" >
    <b-card-header id="headingTwo">
      <h3><b-button type="button" v-b-toggle="'content-' + content.id" aria-expanded="false" aria-controls="collapseTwo">{{ content.title }}</b-button>
      </h3>
    </b-card-header>
    <b-collapse :id="'content-' + content.id" accordion="accordionOne" aria-labelledby="headingTwo">
      <b-card-body>{{ content.description }}</b-card-body>
    </b-collapse>
  </b-card>

</div>
</template>



<script>
export default {
  data () {
    return {
      header: 'Accordion',
      subhead: 'More Content',
      contents: [
        {
        id: 1,
        title: 'Back to the Future II',
        description: 'No. Our only chance to repair the present is in the past, at the point where the timeline skewed into this tangent. In order to put the universe back as we remember it and get back to our reality, we have to find out the exact date and specific circumstances of how, when, and where young Biff got his hands on that sports almanac.'
        },
        {
          id: 2,
          title: 'Back to the Future III',
          description: 'It means your future hasnt been written yet. No ones has. Your future is whatever you make it, so make it a good one. Both of you.'
        },

      ],

  // use a "v-for" to iterate through an object to fill out the content in an accordion.
  }

    }
  }

</script>
