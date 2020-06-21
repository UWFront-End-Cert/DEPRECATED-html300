<!-- Copyright 2020 Markus Schiffer -->
<!-- Individual Image for use in the Bootstrap Carousel. Uses mixin and props. -->

<template>
    <div class="carousel-item" :key="content.id" :class="{ active: content.id === 0 }" @click="toggleShow()">
        <img class="d-block m-auto image-fluid" :src=content.src :alt=content.alt :title=content.title :class="{ myborder: show }">
    </div>
</template>

<script>
// Mixin which determines whether or not to show the border for an image. Triggered on click (see above)
const showBorder = {
    data() {
        return {
            show: false
        }
    },
    methods: {
        toggleShow() {
            this.show = !this.show;
        }
    }
}

export default {
    name: 'carimage',
    props: {
        content: {
            // Validates the input for the whole object.
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
    mixins: [showBorder],
}
</script>

<!-- Border for images, if activated. -->
<style scoped>
    .myborder {
        border: 5px solid;
    }
</style>