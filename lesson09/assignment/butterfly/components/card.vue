<template lang="html">
  <article class="card">

    <h2 class="card_title">{{insect.scientificName}}</h2>
    <p class="card_copy">{{insect.canonicalName}}</p>

  </article>
</template>

<script>
import default {
  props: {
  insect: Object
  }
}
export default {
}
</script>
