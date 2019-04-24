import React from 'react';

class ToDoListItem extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return ( //show each todo item's title in a list 
      <li>
       {this.props.title}
      </li> 
    );
  }
}

export default ToDoListItem