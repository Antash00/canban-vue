<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'btn'
}
</script>

<style scoped>
.button {
  background-color: cadetblue;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
}
</style>