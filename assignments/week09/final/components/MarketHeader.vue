<template>
<div class="header">
<h1>Farmers' Markets</h1>
<Nav />
</div>
</template>

<script>
import Nav from '../components/Nav'

export default {
    components: {
        Nav
    }
}

</script>

<style scoped>
.header {
    padding: 1% 5% 2% 5%;
    background-color: lavender
}
</style>