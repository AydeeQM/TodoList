<template>
<div class="register-all">
  <div class="register-item" v-show="!isEditing">
    <span><i class="fas fa-user"></i></span>
    <p>{{todo.name}}</p>
    <p>{{todo.date}}</p>
    <div class="mb-2">
      <b-button size="sm" variant="primary" v-on:click="showOldForm">Editar</b-button>
      <b-button size="sm" variant="secondary" v-on:click="handleDelete(todo)">Eliminar</b-button>
    </div>
  </div>
  <div class="register-edit-item" v-show="isEditing">
    <b-form @submit="hideForm" autocomplete="off">
      <b-form-group id="newTitle"
                    label="Nombre"
                    label-for="editTitle">
        <b-form-input id="editTitle"
                      type="text"
                      v-model="todo.name"
                      required
                      placeholder="Ingresa nombre">
        </b-form-input>
      </b-form-group>
      <b-form-group id="newDescription"
                    label="Fecha"
                    label-for="editDescription">
        <b-form-input id="editDescription"
                      type="text"
                      v-model="todo.date"
                      required
                      placeholder="Ingresa fecha">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Guardar</b-button>
    </b-form>
  </div>
      <b-form-checkbox
      v-model="status"
      value="Confirmado"
      unchecked-value="No confirmado"
    >
      <strong>{{status}}</strong>
    </b-form-checkbox>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      status: "No confirmado",
      isEditing: false
    };
  },
  methods: {
    completeTodo(todo) {
      this.$emit("complete-todo", todo);
    },
    handleDelete(todo) {
      this.$emit("handle-delete", todo);
      console.log(todo);
    },
    showOldForm() {
      this.isEditing = true;
    },
    hideForm(evt) {
      evt.preventDefault();
      this.isEditing = false;
    }
  }
};
</script>

<style lang="scss">
.register-all {
  border: 1px solid #eae9e9;
  border-radius: 6px;
  margin-left: 0.8em;
  margin-right: 0.8em;
  padding: 15px;
  width: 220px;
}
</style>


