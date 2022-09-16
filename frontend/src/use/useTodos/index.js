import { reactive, computed } from "vue"

import app from "@/feather-client"

let user_id;

const todoState = reactive({
    todoListReady: false,
    todo: {},
})

app.service('todo').on('created', async todo => {
    if(todo.user_id === user_id){
        console.log('TODO EVENT created', todo)
        todoState.todo[todo.id] = todo
    }
})

app.service('todo').on('patched', todo => {
    if(todo.user_id === user_id){
        console.log('TODO EVENT patched', todo)
        todoState.todo[todo.id] = todo
    }
})

app.service('todo').on('removed', todo => {
    if(todo.user_id === user_id){
        console.log('TODO EVENT removed', todo)
        delete todoState.todo[todo.id]
    }
})

app.service('todo').on('updated', todo => {
    console.log("UPDATE ?", todo)
    if(todo.user_id === user_id){
        console.log('TODO EVENT updated', todo)
        todoState.todo[todo.id] = todo
    }
})

app.on('logout', () => {
    console.log('TODO, logout')
    todoState.todoListReady = false;
    todoState.todo = {}
    user_id = null;
})

app.on('login', data => {
    user_id = data.user.id
})

const todoList = computed(() => {
    if (!todoState.todoListReady) {
        app.service('todo').find({query:{'user_id': user_id}}).then(list => {
            list.forEach(todo => { todoState.todo[todo.id] = todo })
            todoState.todoListReady = true
        })
        return []
    }
    return Object.values(todoState.todo)
})

const addTodo = (text, user_id) => {
    app.service('todo').create({ text, user_id})
}

const deleteTodo = (id) => {
    app.service('todo').remove(id)
}

const editTodo = (id, text) => {
    app.service('todo').update(id, { text, user_id })
}

export function useTodos(id) {
    user_id = id
    return {
        todoList, addTodo, deleteTodo, editTodo
    }
}