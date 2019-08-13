<template>
  <div id="app enable">
    <b-navbar toggleable="sm" type="dark">
      <b-navbar-brand href="/">HB |</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/about">About</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml">
          <b-nav-item-dropdown text="Recipes">
            <b-dropdown-item href="/noms">Noms</b-dropdown-item>
            <b-dropdown-item href="/sippins">Sippin's</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item href="/recipe">Submit a Recipe</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Nav"
};
</script>
//  Add "scoped" attribute to limit CSS to this component only
<style scoped>
</style>
