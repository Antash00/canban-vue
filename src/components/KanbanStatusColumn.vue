<template>
  <b-col class="mb-3">
    <h4 :class="'title_' + status.value+' m-0 py-2'">{{ status.name }}</h4>
    <div class="status-column px-3"
         @drop="dropTask($event, status.value)">
      <transition-group name="task-list">
        <task-card v-for="task in tasks"
                   :task="task"
                   :key="task.id"
                   draggable="true"
                   @dragover.prevent
                   @dragenter.prevent
                   @dragstart="dragTask($event,task)">
        </task-card>
      </transition-group>
    </div>
  </b-col>
</template>

<script>
import TaskCard from "@/components/TaskCard";
import {mapActions} from "vuex";

export default {
  name: "KanbanStatusColumn",
  components: {TaskCard},
  props: {
    tasks: {
      type: Array,
      required: true
    },
    status: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions({
      dropTaskStore: 'kanban/dropTask',
    }),
    dragTask(e, task) { //Записываем id задачи, которую перетаскивают
      e.dataTransfer.dropEffect = 'move'
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.setData('taskId', task.id)

    },
    dropTask(e, status) { // Получаем id перетаскиваемыой задачи, получаем статус колонки, в которую перетащили задачу
      const taskId = e.dataTransfer.getData('taskId')
      const information = {status: status, id: taskId}
      this.dropTaskStore(information)
    }
  },
}
</script>

<style scoped>

.status-column {
  max-height: 760px;
  overflow: auto;
  height: 100%;
  background-color: #f6f6f6;
}

.title_new {
  background-color: #f6f6f6;
  border-top: #e3ce6e solid 4px;
  user-select: none;
}

.title_in_progress {
  background-color: #f6f6f6;
  border-top: #816fc0 solid 4px;
  user-select: none;
}

.title_review {
  background-color: #f6f6f6;
  border-top: #c21313 solid 4px;
  user-select: none;
}

.title_complete {
  background-color: #f6f6f6;
  border-top: #13c278 solid 4px;
  user-select: none;
}

.task-list-item {
  display: inline-block;
  margin-right: 10px;
}

.task-list-enter-active,
.task-list-active {
  transition: all 1s ease;
}

.task-list-enter-from,
.task-list-leave-to {
  opacity: 0;
  transition: all 1s ease;
  transform: translateY(30px);
}


</style>