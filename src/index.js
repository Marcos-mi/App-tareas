import './styles.css';

import { Todo, TodoList } from './classes';



const todoList = TodoList();
const tarea = new Todo('Aprender laravel');
const tarea2 = new Todo('Comprar un unicornnio');

todoList.nuevoTodo(tarea);

console.log(todoList);