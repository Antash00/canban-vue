<template>
  <b-container fluid="xxl"><h1 class="my-4">Канбан доска</h1>
    <btn @click="showDialog">Создать пост</btn>
    <modal-dialog v-model:show="dialogVisible">
      <task-form @hideDialog="hideDialog"/>
    </modal-dialog>
    <KanbanList
        v-if="!isTasksLoading"
        :tasks="tasks"
        :tasksStatuses="tasksStatuses"
    >
    </KanbanList>
  </b-container>
</template>

<script>
import KanbanList from "@/components/KanbanList";
import TaskForm from "@/components/TaskForm";
import {mapState, mapActions, mapMutations} from 'vuex'

export default {
  name: 'App',
  components: {KanbanList, TaskForm},
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    ...mapMutations({
      setTasks: 'kanban/setTasks',
    }),
    ...mapActions({
      fetchTasks: 'kanban/fetchTasks',
    }),

    showDialog() {
      this.dialogVisible = true
    },
    hideDialog() {
      this.dialogVisible = false
    }
  },
  mounted() {
    this.fetchTasks()
  },
  computed: {
    ...mapState({
      tasksStatuses: state => state.kanban.tasksStatuses,
      tasks: state => state.kanban.tasks,
      isTasksLoading: state => state.kanban.isTasksLoading
    })
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
