<template>
  <div class="register-item">
    <span><i class="fas fa-user"></i></span>
    <p>Nombre: {{todo.name}}</p>
    <p>Fecha: {{todo.date}}</p>
    <b-form-checkbox
      v-model="status"
      value="Confirmado"
      unchecked-value="No confirmado"
    >
      <strong>{{status}}</strong>
    </b-form-checkbox>
    <div>
      <b-button size="sm" variant="primary">Editar</b-button>
      <b-button size="sm" variant="secondary">Eliminar</b-button>
    </div>
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
      status: "No confirmado"
    };
  }
};
</script>

<style lang="scss">
.register-item {
  padding: 15px;
}
</style>


