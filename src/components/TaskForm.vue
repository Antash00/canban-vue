<template>
  <form class="form" @submit.prevent>
    <h4>Создание поста</h4>
    <custom-input v-model="task.title" type="text" class="mb-3" placeholder="Название"/>
    <custom-textarea v-model="task.body" placeholder="Описание"/>
    <btn @click="createTask" style="align-self: center; margin-top: 15px">Создать</btn>
  </form>
</template>

<script>


import {mapActions} from "vuex";
import CustomTextarea from "@/components/UI/CustomTextarea";

export default {
  components: {CustomTextarea},
  data() {
    return {
      task: {
        userId: 2,
        title: '',
        body: '',
        status: 'new'
      }
    }
  },
  methods: {
    ...mapActions({
      createTaskStore: 'kanban/createTask',
    }),
    createTask() {
      this.task.id = Date.now()
      this.createTaskStore(this.task)
      this.title = ''
      this.body = ''
      this.task = {
        title: '',
        body: '',
      }
      this.$emit('hideDialog')
    }
  }
}
</script>

<style scoped>


.form {
  display: flex;
  flex-direction: column;
}



</style>