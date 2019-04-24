// import merge from 'lodash/merge';
import { RECEIVE_TODOS, RECEIVE_TODO } from "../actions/todo_actions";


const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

//remember to change initialState back to {}
const todosReducer = (oldState = initialState, action) => {
  Object.freeze(oldState);
  let newState = Object.assign( {}, oldState);

  switch (action.type) { 
    case RECEIVE_TODOS:
      action.todos.forEach( todo => {
        newState[todo.id] = todo;
      });
      return newState;
    case RECEIVE_TODO: 
      newState[action.todo.id] = action.todo;
      return newState;
    default: 
      return oldState;
  }
};

export default todosReducer;