<template>
    <div>
        <!-- Using slot to passing in outside content with html tag --> 
        <slot name="title"></slot>
        <hr>
        <slot name="content"></slot>
        <!-- passing in Default slot -->
        <span style="color: #ccc">   <slot></slot> </span>
        <!-- set default content for slot "extra" when no data is passing from outside --> 
        <span style="color: #888"> <slot name="extra"> Thank You! </slot></span>
    </div>
</template>

<script>
</script>

<style scoped>
h2 {color:red}
    div {
        background-color: lightseagreen;
        border: 2px solid red;
        box-shadow: 1px 1px 2px blue;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }

</style>