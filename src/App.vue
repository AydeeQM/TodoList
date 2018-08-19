<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <section>
      <todo-list v-bind:todos="todos"></todo-list>
      <new-todo @new-todo="addNewTodo"></new-todo>
    </section>
  </div>
</template>

<script>
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

export default {
  name: "app",
  components: {
    TodoList,
    NewTodo
  },
  data() {
    return {
      msg: "PEDIDOS",
      newTodoText: {},
      todos: [
        {
          title: "Project 1",
          description: "description 1"
        },
        {
          title: "Project 2",
          description: "description 2"
        }
      ]
    };
  },
  methods: {
    addNewTodo(newTodo) {
      this.todos.push(newTodo);
      this.newTodoText = {};
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}

section > div {
  margin: 0 auto;
}
</style>
