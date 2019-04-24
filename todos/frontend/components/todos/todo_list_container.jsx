import { connect } from 'react-redux';
import ToDoList from './todo_list';
import {allTodos} from '../../reducers/selectors';
import { receiveTodo } from '../../actions/todo_actions'

const mapStatetoProps = (state) => {
  
  return { 
   todos: allTodos(state) //create prop todos, using selector allTodos ??
  }
  };

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)) //create prop "receiveTodo" (diff from the receiveToDo"action")
});

const TodoListContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(ToDoList);

export default TodoListContainer;