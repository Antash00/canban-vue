<template>
  <div class="task-card">
    <h5 class="task-title m-0 text-start">{{ task.id }} : {{ task.title }}</h5>
    <div class="task-body">
      {{ task.body }}
    </div>
    <btn @click="this.removeTask(task)">Удалить</btn>
  </div>
</template>

<script>
import Btn from "@/components/UI/Btn";
import {mapActions} from "vuex";

export default {
  name: "TaskCard",
  components: {Btn},
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions({
      removeStoreTask: 'kanban/removeTask',
      deleteTask: 'kanban/deleteTask'
    }),
    removeTask(task) {
      this.removeStoreTask(task)
      this.deleteTask(task)
    }
  },
}

</script>

<style scoped>
.task-card {
  padding: 5px;
  height: 150px;
  overflow: hidden;
  margin: 10px 0;
  background-color: white;
}

.task-card:hover {
  position: relative;
  height: unset;
  cursor: pointer;
  box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
  transition: 0.4s;
}

.task-card:hover * {
  cursor: pointer;
}

.task-card:hover .task-title {
  overflow: unset;
  max-height: unset;
}


.task-title {
  cursor: default;
  max-height: 25px;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: bold;
}

.task-body {
  font-size: 0.9rem;
  padding: 10px 0;
  min-height: 125px;
  cursor: default;
  text-align: justify;
}
</style>