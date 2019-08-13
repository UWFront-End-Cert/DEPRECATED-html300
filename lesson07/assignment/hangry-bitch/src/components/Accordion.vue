<template>
  <div class="accordion">
    <b-card v-for="(item, index) in accordion" :key="index" no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle="'accordion' + index" variant="secondary">{{item.title}}</b-button>
      </b-card-header>
      <b-collapse :id="'accordion' + index" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{item.text}}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Accordion",
  data: () => ({
    accordion: [
      {
        title: "What's in a Name?",
        text:
          "My best friend call me a hangry bitch...  turns out I was hungry. The name just stuck. Boop a beep. boop boop a beep. a beep. a boop. a beep beep a boop. Boop a beep. boop boop a beep. a beep. a boop. a beep beep a boop. Boop a beep. boop boop a beep. a beep. a boop. a beep beep a boop. Boop a beep. boop boop a beep. Boop a beep. boop boop a beep. a beep. a boop. a beep beep a boop. Boop a beep. boop boop a beep. a beep. a boop. a beep beep a boop. Boop a beep. boop boop a beep. a beep. a boop. a beep beep a boop. Boop a beep. boop boop a beep. Boop a beep. boop boop a beep. a beep. a boop. a beep beep a boop. Boop a beep. boop boop a beep. a beep. a boop. a beep beep a boop. Boop a beep. boop boop a beep. a beep. a boop. a beep beep a boop. Boop a beep. boop boop a beep. Boop a beep. boop boop a beep. a beep. a boop. a beep beep a boop. Boop a beep. boop boop a beep. a beep. a boop. a beep beep a boop. Boop a beep. boop boop a beep. a beep. a boop. a beep beep a boop. Boop a beep. boop boop a beep."
      },
      {
        title: "Accordion 2",
        text:
          "a beep. a boop. a beep beep a boop. Boop a beep. boop boop a beep. a beep. a boop. a beep beep a boop. Boop a beep. boop boop a beep. "
      },
      {
        title: "Accordion 3",
        text:
          "Boop a beep. boop boop a beep. a beep. a boop. a beep beep a boop. Boop a beep. boop boop a beep. a beep. a boop. a beep beep a boop. Boop a beep. boop boop a beep. a beep. a boop. a beep beep a boop. Boop a beep. boop boop a beep. Boop a beep. boop boop a beep. a beep. a boop. a beep beep a boop. Boop a beep. boop boop a beep. a beep. a boop. a beep beep a boop. Boop a beep. boop boop a beep. a beep. a boop. a beep beep a boop. Boop a beep. boop boop a beep. Boop a beep. boop boop a beep. a beep. a boop. a beep beep a boop. Boop a beep. boop boop a beep. a beep. a boop. a beep beep a boop. Boop a beep. boop boop a beep. a beep. a boop. a beep beep a boop. Boop a beep. boop boop a beep. "
      }
    ]
  })
};
</script>
