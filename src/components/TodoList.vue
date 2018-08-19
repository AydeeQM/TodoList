<template>
  <ul>
    <li is="todo" v-for="(todo, index) in todos" :todo.sync="todo" :key="index" ></li>
  </ul>
</template>

<script>
import Todo from "./Todo";

export default {
  props: ["todos"],
  components: {
    Todo
  }
};
</script>

