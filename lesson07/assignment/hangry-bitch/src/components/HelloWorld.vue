<template>
  <div class="hello">
    <h1 class="display-2 text-sm-center text-lg-right">{{title}}</h1>
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      controls
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide
        v-for="image in carousel"
        :key="image.src"
        :caption="image.caption"
        :text="image.text"
        :img-src="image.src"
      ></b-carousel-slide>
    </b-carousel>
    <!-- jumbotron -->
    <div class="jumbotron">
      <h1 class="display-4">{{jumbotron.title}}</h1>
      <p class="lead"></p>
      <hr class="my-4" />
      <p>{{jumbotron.text}}</p>
      <p class="lead">
        <!-- includes tool tip -->
        <a
          class="btn btn-primary btn-lg"
          href="#"
          role="button"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Click to go to submission page"
        >
          Submit My
          Recipe!
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import macPic from "@/assets/mac-n-cheese.jpg";
import fizzPic from "@/assets/fizzicist.jpg";
import rumPic from "@/assets/rumntug.jpg";

export default {
  name: "HelloWorld",
  data: () => ({
    title: "Hangry Bitch",
    jumbotron: {
      title: "Get featured on Hangry Bitch!",
      text:
        "Have a delicious creation you'd like to share? Submit your recipe and a picture using the button below and we'll feature your concotion on our site!"
    },
    carousel: [
      {
        src: rumPic,
        caption: "bubbly!",
        text: "i am text",
        position: ""
      },
      {
        src: fizzPic,
        caption: "bubbly!",
        text: "i am text",
        position: ""
      },
      {
        src: macPic,
        caption: "oooowee!",
        text: "i am also text"
      }
    ]
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  color: black;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>


