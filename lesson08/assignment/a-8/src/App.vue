<!-- Copyright 2020 Markus Schiffer -->
<!-- The following code is for a Bootstrap nav bar, used on all pages. -->

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <mytitle>
                <span slot="aNum">8</span>
            </mytitle>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbarNav" class="collapse navbar-collapse">
                <ul class="navbar-nav">
                    <li class="nav-item"><router-link class="nav-link" to="/">Landing</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/Images">Images</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/Grid">Grid</router-link> </li>
                    <li class="nav-item"><router-link class="nav-link" to="/Accordion">Accordian</router-link></li>
                </ul>
            </div>
        </div>
    </nav>
    <router-view/>
    <myheader/>
  </div>
</template>

<script>
import mytitle from '@/components/Title.vue'
export default {
    components: {
        mytitle
    }
}
</script>
