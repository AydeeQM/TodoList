<template>
  <div class="container-new-todo border rounded pl-3 pr-3 pt-3 pb-3">
    <button v-on:click="handleShowCreate" v-show="!isCreating">+</button>
    <b-form v-show="isCreating" autocomplete="off">
      <b-form-group 
        id="enterTitle"
        label="Nombre"
        label-for="exampleInput1"
      >
        <b-form-input
          id="exampleInput1"
          type="text"
          v-model="nameText"
        >
        </b-form-input>
      </b-form-group>
      <b-form-group 
        id="enterDescription"
        label="Fecha"
        label-for="exampleInput2"
      >
        <date-picker
          v-model="dateText"
          :first-day-of-week="1"
          placeholder="Ingresa fecha"
          lang="es"
          format="DD/MM/YYYY"
          :editable="false"
          :not-before="new Date()">
        </date-picker>
      </b-form-group> 
      <div class="d-flex justify-content-between">
        <b-button variant="outline-success" class="w-50" v-on:click="handleCreateTask()">Create</b-button>
        <b-button variant="outline-danger" class="w-50" v-on:click="handleCancelCreate">Cancel</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import moment from "moment";

export default {
  components: { DatePicker },
  data() {
    return {
      nameText: "",
      dateText: "",
      isCreating: false
    };
  },
  methods: {
    handleCreateTask() {
      const name = this.nameText;
      const date = moment(this.dateText).format("DD/MM/YYYY");
      this.$emit("new-todo", {
        name,
        date
      });
    },
    handleCancelCreate() {
      this.isCreating = false;
    },
    handleShowCreate() {
      this.isCreating = true;
    }
  }
};
</script>
<style lang="scss">
.container-new-todo {
  align-self: center;
  justify-self: center;
}
</style>

