<template>
  <textarea type="text" class="textarea" :value="modelValue" @input="updateTextarea"></textarea>
</template>

<script>
export default {
  name: "custom-textarea",
  props: {
    modelValue: [String,Number]
  },
  methods: {
    updateTextarea(event)
    {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.textarea
{
  width: calc(100% - 32px);
  border: 1px solid aquamarine;
  padding: 15px;
}
</style>