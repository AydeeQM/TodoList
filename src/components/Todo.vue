<template>
  <li>{{todo.title}} : {{todo.description}}</li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
};
</script>

