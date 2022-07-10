<template>
  <Transition name="dialog">
  <div class="dialog" v-if="show" @click="hideDialog">
    <div class="dialog__content" @click.stop>
      <slot></slot>
    </div>

  </div>
  </Transition>
</template>

<script>
export default {
  name: "modal-dialog",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideDialog() {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.dialog__content {
  margin: auto;
  background-color: white;
  border-radius: 15px;
  min-height: 50px;
  min-width: 300px;
  padding: 30px;
  width: 50vh;
}
.dialog-enter-active,
.dialog-leave-active {
  transition: opacity 0.4s ease;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
}
</style>