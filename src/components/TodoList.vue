<template>
  <ul>
    <li is="todo" v-for="(todo, index) in todos" :todo.sync="todo" :key="index" ></li>
  </ul>
</template>

<script>
import Todo from "./Todo";

export default {
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  components: {
    Todo
  }
};
</script>

