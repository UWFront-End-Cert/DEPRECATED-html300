<template>
<div id="app" class="noselect">
  <header id="nav">
    <router-link class="nav_link" to="/">Landing Home Page</router-link> |
    <router-link class="nav_link" to="/images">Images</router-link> |
    <router-link class="nav_link" to="/grid">Grid System</router-link> |
    <router-link class="nav_link" to="/accordion">Accordion</router-link>
  </header>
  <router-view/>
  <!-- Footer -->
  <footer id="footer" class="page-footer font-small bg-info">
    <!-- Copyright -->
    <div class="footer-copyright text-center py-3">© 2018 Copyright:
      <a href="https://ymmy1.github.io/portfolio/" class="text-secondary">Ymmy</a>
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</div>
</template>

<style lang="scss" scoped >

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;

}

#nav{
  background: skyblue;
  padding: 2% 30% 0.5%;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  justify-content: space-around;
}
.nav_link{
color: white;
font-weight: bold;
text-decoration: none;

 &:hover{
  color:gold;
}}
.noselect {
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;          /* Likely future */      
}


</style>
<script>
  
</script>