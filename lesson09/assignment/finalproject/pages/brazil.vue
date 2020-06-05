<template>
  <div class="container">
      <TheNavigation />
      <div class="body">
        <h1>All About Brazil</h1>
      </div>
      <ul>
        <li v-for="person in persons">
          {{person.name}}
          {{person.age}}
        </li>
      </ul>
      <footer>
        <TheNavigation />
      </footer>

  </div>
</template>

<script>

import TheNavigation from "@/components/TheNavigation";

export default {
  components: {
    TheNavigation
  },
  data () {
    return {
      persons:[
        {name: 'Aaron', ago: 40, color: 'red'},
        {name: 'Max', ago: 27, color: 'blue'}
      ],
    }
  },
  data () {
    return {
      experiences: [
        {
          name: "Iguaçu Falls",
          image: "iguacu-falls.jpg",
          description:
            "Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis."
        },
      ]
    }
  }
};

</script>

<style>

</style>
