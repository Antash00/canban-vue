<template>
<input type="text" class="input" :value="modelValue" @input="updateInput">
</template>

<script>
export default {
  name: "custom-input",
  props: {
    modelValue: [String,Number]
  },
  methods: {
    updateInput(event)
    {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.input {
  width: calc(100% - 32px);
  border: 1px solid aquamarine;
  padding: 15px;
  margin-top: 15px;
}
</style>
