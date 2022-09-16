<template v-slot:default="slotProps">
  <div class="main-component">
    <div class="form">
      <label class="title">TODO</label>
      <input type="text" v-model="todoText" @keyup.enter="addTodo(todoText, user.id);this.todoText=''"/>
      <a class="addButton" @click="this.todoText.length!==0 && addTodo(todoText, user.id);this.todoText=''">
        <i class="fas fa-plus"></i>
      </a>
    </div>

    <div class="list-container">
      <div class="todo-of-list" v-for="todo in todoList">
        <input v-if="todo.edit" v-model="todoEditText" @blur="todo.edit = false; editTodo(todo.id, todoEditText);" @keyup.enter="todo.edit = false; editTodo(todo.id, todoEditText);">
        <div v-else>
          <label @click="todo.edit = true; todoEditText = todo.text;">{{ todo.text }}</label>
          <small>{{ todo.date }}</small>
        </div>
        <div>
          <a @click="deleteTodo(todo.id);"><i class="fas fa-trash-alt"></i></a>
        </div>
      </div>
      <div class="empty-list" v-if="todoList.length === 0">
        No todo
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue"
import { useTodos } from "@/use/useTodos"

export default {
  name: 'ToDoList',
  props: ['user'],
  setup(props) {
    const { todoList, addTodo, deleteTodo, editTodo } = useTodos(props.user.id)
    const todoText = ref('')
    const todoEditText = ref('')

    return {
      todoList, addTodo, deleteTodo, editTodo,
      todoText, todoEditText
    }
  }
}
</script>

<style scoped>
.main-component {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #eeeedc;
}



/* ******************************* *
 *             HEADER              *
 * ******************************* */
.form {
  padding: 15px 15px 7px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form label {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 22px;
  color: #2c3e50;
}

.form input {
  border: none;
  border-radius: 5px;
}

.addButton {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #7ac982;
  color: white;
  padding: 8px;
  font-size: 150%;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
}
.addButton:hover {
  background-color: #89D269;
}
.addButton:active {
  background-color: #97DB4F;
}



/* ******************************* *
 *          LIST OF TODOS          *
 * ******************************* */
.list-container {
  padding: 7px 0;
}

.todo-of-list {
  display: flex;
  margin: 15px;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  justify-content: space-between;
  align-items: center;
}

.todo-of-list label {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: #2c3e50;
}
.todo-of-list small {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: #858585;
}
.todo-of-list div a {
  color: #ed474a;
  cursor: pointer;
}
.todo-of-list div a:hover {
  color: #F27578;
}
.todo-of-list div a:active {
  color: #ed474a;
}

.empty-list {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: #2c3e50;
}
</style>