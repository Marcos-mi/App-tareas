import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';



export const todoList = new TodoList();
crearTodoHtml(tarea);

localStorage.setItem('mi-llave', 'abc123')