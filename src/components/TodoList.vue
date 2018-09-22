<template>
  <div class="d-flex ml-4 mr-4">
    <div is="todo" v-for="(todo, index) in todos" :todo.sync="todo" :key="index" ></div>
  </div>
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

