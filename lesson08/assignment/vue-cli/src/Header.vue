<template lang="html">
  <div>
    <!-- navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">

          <!-- Vue Router links to other apps or "pages" -->
          <!-- For Bootstrap style, add class="nav-item nav-link" to each -->
          <router-link class="nav-item nav-link active" to="/">Home</router-link>
          <router-link class="nav-item nav-link" to="/images">Images</router-link>
          <router-link class="nav-item nav-link" to="/accordion">Accordion</router-link>
          <router-link class="nav-item nav-link" to="/grid">Grid</router-link>
          
        </div>
      </div>
    </nav>

    <!-- This Vue router element specifies where in HTML to render Vue app -->
    <router-view></router-view>

  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
</style>
