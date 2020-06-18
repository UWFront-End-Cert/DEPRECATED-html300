<template>
<div>
    <h4>
        <slot name="header">{{card.title  | titleize }}</slot>
        <!-- not sure if card.title is considered 'default value' or if something else was being asked of me -->
    </h4>
    <b-img
        :alt="card.text"
        :src="getImgUrl(card.images)"
        fluid
        @click="border()"
        v-bind:class="{ 'is-bordered' : bordered }" ></b-img>
</div>
</template>

<script>
export default {
    name: 'Images',
    data() {
        return {
            bordered: false
        }
    },
    filters: {
        titleize(value) {
            //first letter of each word capitalized
            return value.replace(/(?:^|\s|-)\S/g, x => x.toUpperCase());
            //all capitalized
            //return value.replace(value, x => x.toUpperCase());
        }
    },
    props: {
        card: {
            type: Object,
            required: true
        }
    },
    methods: {
        getImgUrl: function (pic) {
            return require('@/assets/' + pic)
        },
        border: function () {
            this.bordered = !this.bordered;
            console.log(this.bordered)
        }
    }
};
</script>

<style scoped lang='scss'>
@import './main.scss';

img{
padding: .5em;
max-height:30rem;
width:auto;

}

img.is-bordered  {
	@include border;
}
</style>
