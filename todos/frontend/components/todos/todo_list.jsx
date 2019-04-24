import React from 'react';
import ToDoListItem from './todo_list_item'

class ToDoList extends React.Component {
 
  render() {
   return (
      <ul><ToDoListItem />
      </ul>
      
   );
  }
}

export default ToDoList;