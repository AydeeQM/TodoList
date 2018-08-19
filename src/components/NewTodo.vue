<template>
  <div class="w-25 border rounded pl-3 pr-3 pt-3 pb-3">
    <button v-on:click="handleShowCreate" v-show="!isCreating">+</button>
    <b-form v-show="isCreating" autocomplete="off">
      <b-form-group 
        id="enterTitle"
        label="Titulo"
        label-for="exampleInput1"
      >
        <b-form-input
          id="exampleInput1"
          type="text"
          v-model="titleText"
        >
        </b-form-input>
      </b-form-group>
      <b-form-group 
        id="enterDescription"
        label="Description"
        label-for="exampleInput2"
      >
        <b-form-input 
          id="exampleInput2"
          type="text"
          v-model="descriptionText"
        >
        </b-form-input>
      </b-form-group> 
      <div class="d-flex justify-content-between">
        <b-button variant="outline-success" class="w-50" v-on:click="handleCreateTask()">Create</b-button>
        <b-button variant="outline-danger" class="w-50" v-on:click="handleCancelCreate">Cancel</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titleText: "",
      descriptionText: "",
      isCreating: false
    };
  },
  methods: {
    handleCreateTask() {
      const title = this.titleText;
      const description = this.descriptionText;
      this.$emit("new-todo", {
        title,
        description
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