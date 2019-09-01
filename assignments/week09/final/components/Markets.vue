<template>
<article class="market">
    <h2>{{ market.marketname }}</h2>
    <br/>
    <!-- <h3>{{ market.Address }}</h3>
    <h3>{{ market.Schedule }}</h3>
    <br/>
    <h3>Market Offerings</h3>
    <p>{{ market.Products }}</p>
    <br/> -->
    <p>USDA Market Id: {{ market.id }}</p>
</article>
</template>

<script>
export default {
    props: {
    market: Object
    }
}
</script>