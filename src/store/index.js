import axios from "axios";
export default {
    strict: true,
    state: {
        todoList: [
            { status: 'completed', content: '吃饭' },
            { status: 'completed', content: '睡觉' },
            { status: 'completed', content: '打豆豆' }
        ],
        currentFilter: 'all'
    },
    getters: {
        filteredTodoList: function (state) {
            let filteredTodoList = [];
            for (let i = 0; i < state.todoList.length; i++) {
                if (state.currentFilter === 'all' || state.currentFilter === state.todoList[i].status) {
                    filteredTodoList.push(state.todoList[i])
                }
            }
            return filteredTodoList;
        }
    },
    mutations: {
        handleCreateTodo: function (state, inputtingItem) {
            state.todoList.push({
                status: 'active',
                content: inputtingItem
            })
        },
        toggleActive: function (state, index) {
            state.todoList[index].status = state.todoList[index].status === 'completed' ? 'active' : 'completed';
        },
        handleFilter: function (state, currentFilter) {
            state.currentFilter = currentFilter;
        },
        initTodos: function (state,todos) {
            state.todoList = todos;
        }

    },
    actions: {
        
        feachTodo(context) {
            let url = "http://5b4dcb2aec112500143a2311.mockapi.io/api/todos";
            axios
                .get(url)
                .then(function (response) {
                    context.commit("initTodos", response.data)
                })
        },
        createTodo(context,content){
            let url = "http://5b4dcb2aec112500143a2311.mockapi.io/api/todos";
            axios
                .post(url,{content:content})
                .then(function (response) {
                    context.dispatch("feachTodo")
                })
        },
        updataTodo(context,content){
            let url = "http://5b4dcb2aec112500143a2311.mockapi.io/api/todos/{id}";
            axios
                .put(url,{
                    content:content,
                    status:'completed'
                })
                .then(function (response) {
                    context.dispatch("feachTodo")
                })
        }

    }

}
