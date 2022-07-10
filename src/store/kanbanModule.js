import axios from "axios";

export const kanbanModule = {
    state: () => ({
        tasksStatuses: [
            {id: 1, name: 'Очередь', value: 'new'},
            {id: 2, name: 'В работе', value: 'in_progress'},
            {id: 3, name: 'На проверке', value: 'review'},
            {id: 4, name: 'Выполнено', value: 'complete'},
        ],
        tasks: [],
        isTasksLoading: false,
        limit: 10,
    }),
    getters: {},
    mutations: {
        setTasks(state, tasks) {
            state.tasks = tasks;
        },
        setLoading(state, bool) {
            state.isTasksLoading = bool
        },
    },
    actions: {
        async fetchTasks({state, commit, dispatch}) {
            try {
                commit('setLoading', true)
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _limit: state.limit
                    }
                })
                commit('setTasks', response.data)
                dispatch('randomStatuses') // добавляем статусы в случайном порядке для отображение на доске
            } catch (e) {
                console.log(e)
            } finally {
                commit('setLoading', false)
            }
        },
        async deleteTask({state, commit}, id) {
            try {
                const response = await axios.delete('https://jsonplaceholder.typicode.com/posts/' + id)
            } catch (e) {
                console.log(e)
            }
        },
        async updateTask({state, commit}, task) {
            try {
                commit('setLoading', true)
                const response = await axios.put('https://jsonplaceholder.typicode.com/posts/' + task.id, {
                    data: {
                        id: task.id,
                        title: task.title,
                        body: task.body,
                        userId: task.userId
                    }
                })
            } catch (e) {
                console.log(e)
            }
        },
        createTask({state, commit}, task) {
            commit('setTasks', [...state.tasks, task])
        },
        removeTask({state, commit}, task) {
            commit('setTasks', state.tasks.filter(t => t.id !== task.id))
        },
        randomStatuses({state, commit}) {
            for (let task in state.tasks) {
                let randomNumber = Math.floor((Math.random() * state.tasksStatuses.length));
                Object.assign(state.tasks[task], {status: state.tasksStatuses[randomNumber].value})
            }
            commit('setTasks', state.tasks)
        },
        dropTask({state, commit}, params) { // проверка того, можно ли задача переместить в выбранную колонку
            const taskIndex = state.tasks.findIndex(t => t.id === parseInt((params.id)))
            const nextStatusIndex = state.tasksStatuses.findIndex(t => t.value === params.status)
            const currentStatusIndex = state.tasksStatuses.findIndex(t => t.value === state.tasks[taskIndex].status)
            if (nextStatusIndex === (currentStatusIndex + 1)) {
                state.tasks[taskIndex].status = params.status
            }
        }
    },
    namespaced: true
}