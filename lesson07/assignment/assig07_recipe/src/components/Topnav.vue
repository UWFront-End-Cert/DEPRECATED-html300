<template lang="html">
  <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">Menu</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="../../public/index.html">Home</b-nav-item>
        <b-nav-item-dropdown text="Recipies">
            <b-dropdown-item href="../../public/recipe.html">Appitizer</b-dropdown-item>
            <b-dropdown-item href="#">Main Course</b-dropdown-item>
            <b-dropdown-item href="#">Salads</b-dropdown-item>
            <b-dropdown-item href="#">Deserts</b-dropdown-item>
      </b-nav-item-dropdown>

        <b-nav-item href="#">Cooking Blog</b-nav-item>
        <b-nav-item href="#">Upcoming Events</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" right>User Profile</b-nav-item>
          <b-nav-item href="#" right>Contact Us</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
