<template>
  <div>
    <h1 class="display-1">{{ header }}</h1>

  <div id="accordion">
    <h2>{{ subhead }}</h2>
    <!-- <div class="accordion-item" v-for="content in contents" >
      <a @click="toggle"></a> -->
<!--manual accordion to get it working THEN do iteration through blurbs-->
<!--use aria-expanded to convey state of collapsable elements to screen readers and other assistive technology-->
    <div id="accordion">
    <!--each card groups together similar information-->
        <div class="card">
          <div class="card-header" id="headingOne">
            <!--click on button to show/collapse information in cardOne-->
            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Back to the Future</button>
          </div>
        </div>
        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
          <div class="card-body">
            <p class="card-text">How could I have been so careless. One point twenty-one gigawatts. Tom, how am I gonna generate that kind of power, it can't be done, it can't. It was meant to be. Anyway, if Grandpa hadn't hit him, then none of you would have been born. Go. Uh, plutonium, wait a minute, are you telling me that this sucker's nuclear? Oh hey, Biff, hey, guys, how are you doing?.</p>
          </div>
        </div>

        <div class="card">
          <div class="card-header" id="headingTwo">
            <!--click on button to show/collapse information in cardOne-->
            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" :title="contentTwo.title"></button>
          </div>
        </div>
        <div id="collapseTwo" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
          <div class="card-body">
            <p class="card-text"></p>
          </div>
        </div>
      </div>
    </div>
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
        title: 'Back to the Future II',
        description: 'No. Our only chance to repair the present is in the past, at the point where the timeline skewed into this tangent. In order to put the universe back as we remember it and get back to our reality, we have to find out the exact date and specific circumstances of how, when, and where young Biff got his hands on that sports almanac.'
        },
        {
          title: 'Back to the Future III',
          description: 'It means your future hasnt been written yet. No ones has. Your future is whatever you make it, so make it a good one. Both of you.'
        }
      ],
      // isOpen: true,
  // use a "v-for" to iterate through an object to fill out the content in an accordion.
  }
    // methods: {
    //   toggleAccordion: function() {
    //     this.isOpen = !this.isOpen;
    //   },
    }
  }

</script>
