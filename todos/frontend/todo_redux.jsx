import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store';
import { receiveTodos, receiveTodo } from "./actions/todo_actions";





document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();
  // const todosReducer = todosReducer;


  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  
  ReactDOM.render(<App />, root);
})