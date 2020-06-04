<template>
  <!--this is the basic template for the faq accordion page which will fill the template on baseAccordian-->
  <div>
    <div v-for="accordion in accordions" :key="accordion.title">
      <baseAccordian>
  <!--this is the slot the user will see and click on. This will call in the question text -->
        <template v-slot:title>{{ accordion.title }}</template>
<!--this is the slot that will only show when the user clicks on the title slot. This will call in the answer text-->
        <template v-slot:content>
          <div>{{ accordion.text }}</div>
        </template>
      </baseAccordian>
    </div>
  </div>
</template>
<script>
import baseAccordian from "@/components/baseAccordion";

//this is the data and array for the faq accordion page - this should populate the baseAccordian page
export default {
  components: {
    baseAccordian
  },
  data() {
    return {
      accordions: [
//question 1 - first slot
        {
          title: "Is Butterfly Ownership for me?",
          text: "It depends if you like having your flowers pollinated, your nose tickled and your senses delighted. And you can handle the racous partying."
        },

//question 2 - second slot
        {
          title: "What Makes Butterflies so Magical?",
          text: "That's something for the philosophers to answer. We are but a humble website."
        },
//question 3 - third slot
        {
          title: "Where Can I Get More Butterfly Action?",
          text: "At the Butterfly Pavillion. Take a left at Narnia, a right onto 1234 Mockingbird Lane and go straight through Oz and you should be there in no time. (Or you can go to part of your zoo that has them.)"
        },
//question 4 - fourth slot
        {
          title: "Should I donate to your site?",
          text: "Yes. Yes, you should."
        }
           ]
    };
  }
};
</script>
