<template>
  <div id="home">
    <h3 class="mb-4">{{ msg }}</h3>
    <section>
      <div class="d-flex">
        <todo-list v-bind:todos="todos"></todo-list>
        <new-todo @new-todo="addNewTodo"></new-todo>
      </div>
    </section>
  </div>
</template>

<script>
import NewTodo from "../components/NewTodo";
import TodoList from "../components/TodoList";

export default {
  name: "home",
  components: {
    TodoList,
    NewTodo
  },
  data() {
    return {
      msg: "REGISTRAR INVITACIONES",
      newTodoText: {},
      todos: [
        {
          name: "Juan Perez",
          date: "12/08/2018",
          done: false
        },
        {
          name: "Alonso Sanchez",
          date: "12/09/2018",
          done: false
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
#home {
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
