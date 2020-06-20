<!-- Copyright 2020 Markus Schiffer -->
<!-- Individual Image for use in the Bootstrap Carousel. -->

<template>
    <div class="carousel-item" :key="content.id" :class="{ active: content.id === 0 }">
        <img class="d-block m-auto image-fluid" :src=content.src :alt=content.alt :title=content.title>
    </div>
</template>

<script>
export default {
    name: 'carimage',
    props: {
        content: {
            validator: value => {
                return typeof value.id === 'number' &&
                       typeof value.src === 'string' &&
                       typeof value.alt === 'string' &&
                       typeof value.title === 'string'
            },
            type: Object,
            required: true,
        },
    },
}
</script>