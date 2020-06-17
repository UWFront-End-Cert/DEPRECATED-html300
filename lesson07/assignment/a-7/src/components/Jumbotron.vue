<template>
    <!-- Uses a Bootstrap jumbotron to display a welcome message. -->
    <div class="container mt-5">
        <div class="jumbotron">
            <h1 class="text-primary">Welcome to the landing page!</h1>      
            <p class="text-primary">This is a jumbotron. It's pretty fancy.</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Jumbotron'
}
</script>

<style scoped>
    .text-primary {
        color: #363C74;
    }
</style>