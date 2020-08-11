<template>
  <div>
    <h1 class="display-1">{{ header }}</h1>



  </div>
</template>

<script>
export default {
  data () {
    return {
      header: 'Accordion'
  // use a "v-for" to iterate through an object to fill out the content in an accordion.
    }
  }
}
</script>
