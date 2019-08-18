<template>
    <div class="list-img-url" :style="bgImage">
        {{ imgData.img }}
    </div>
</template>

<script>
    export default {
        name: 'list-img-url',
        props: ['source'],
        computed: {
            bgImage: function(){
                return {
                    'background-image': `url(${this.source})`
                }
            }
        }
    }
</script>

<style>
    .list-img-url{
        width: 68px;
        height: 68px;
        border-radius: 34px;
    }

</style>