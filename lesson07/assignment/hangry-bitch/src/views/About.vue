<template>
  <div class="about">
    <h1 class="display-2 text-sm-center text-lg-right">{{title}}</h1>
    <Accordion />
  </div>
</template>

<script>
// @ is an alias to /src
import Accordion from "@/components/Accordion.vue";
export default {
  name: "About",
  components: {
    Accordion: Accordion
  },
  data: () => ({
    title: "About the Hangry Bitch."
  })
};
</script>
