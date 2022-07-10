<template>
  <b-row class="kanban-list">
    <kanban-status-column
        v-for="status in tasksStatuses"
        :status="status"
        :key="status.id"
        :tasks="tasks.filter(t => t.status === status.value)"
        @dragover.prevent
        @dragenter.prevent
    ></kanban-status-column>
  </b-row>
</template>

<script>
import KanbanStatusColumn from "@/components/KanbanStatusColumn";
import {mapState} from "vuex";

export default {
  name: "KanbanList",
  props: {
    tasks: {
      type: Object,
      required: true
    },
    tasksStatuses: {
      type: Array,
      required: true
    }
  },
  components: {
    KanbanStatusColumn
  },
}
</script>

<style scoped>
.kanban-list {
  margin-top: 10px
}
</style>