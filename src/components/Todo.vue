<template>
  <li>{{todo.titleText}} : {{todo.descriptionText}}</li>
</template>

<script>
export default {
  props: ["todo"]
};
</script>

