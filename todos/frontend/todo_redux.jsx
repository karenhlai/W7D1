import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store';
import { receiveTodos, receiveTodo } from "./actions/todo_actions";
import { allTodos } from './reducers/selectors'




document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();

  // const todosReducer = todosReducer;
  window.allTodos = allTodos;

  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  
  ReactDOM.render(<Root store={store}/>, root);
})