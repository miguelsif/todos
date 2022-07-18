import { Todo, TodoList } from "./classes/index.js";
import { crearTodoHTML } from "./js/componentes.js";
import "./styles.css";

const tarea = new Todo("Aprender Javascript");

export const todoList = new TodoList();

todoList.todos.forEach(todo => {crearTodoHTML(todo)});

console.log(todoList)
