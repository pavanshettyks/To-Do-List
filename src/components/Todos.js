import React, { Component } from 'react';
import ToDoItem from './ToDoItem'
import PropTypes from 'prop-types';

class Todos extends Component {
  markDone = () =>{
    console.log('hi');
  }
  render() {
    console.log(this.props.todos)
    return this.props.todos.map((todo)=>(

      <ToDoItem key={todo.id} todo = {todo} markDone = {this.props.markDone}
      delTodo = {this.props.delTodo}/>

    ));
  }
}

//PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
