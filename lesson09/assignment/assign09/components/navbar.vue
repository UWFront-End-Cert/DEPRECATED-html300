<template lang="html">
  <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href = "#">Menu</b-navbar-brand>
        <b-navbar-toggle target = "nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
              <b-nav-item to = "/"> Home </b-nav-item>
              <b-nav-item-dropdown text="Recipes">
                  <nuxt-link class = "dropdown-item" to = "/recipes"> Appitizer </nuxt-link>
                  <nuxt-link class = "dropdown-item" to = "/recipes"> Main Course </nuxt-link>
                  <nuxt-link class = "dropdown-item" to = "/recipes"> Salads </nuxt-link>
                  <nuxt-link class = "dropdown-item" to = "/recipes"> Deserts </nuxt-link>
              </b-nav-item-dropdown>
              <b-nav-item to = "/blogs"> Recipes Blog </b-nav-item>
              <b-nav-item to = "/events"> Upcoming Events </b-nav-item>
        </b-navbar-nav>
      <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item to = "/">User Profile</b-nav-item>
            <b-nav-item to = "/">Contact Us</b-nav-item>
          </b-navbar-nav>
      </b-collapse>
  </b-navbar>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
nuxt-link{
  text-decoration: none;
}
</style>
