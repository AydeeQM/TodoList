<template>
  <div class="d-flex ml-4 mr-4">
    <div is="todo" v-on:handle-delete="handleDelete"  v-for="(todo, index) in todos" :todo.sync="todo" :key="index" ></div>
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
  },
  methods: {
    handleDelete(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    }
  }
};
</script>


