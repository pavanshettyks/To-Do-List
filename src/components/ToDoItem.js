import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToDoItem extends Component {
  getStyle = () =>{
    /*if(this.props.todo.completed){
      return{
        textDecoration: 'line-through'
      }
    }
    else{
      return{
        textDecoration: 'bold'
      }
    }*/
    return {
      background: '#f6f4f4',
      padding: '10px',
      borderBottom: '1px #cc dotted',
      textDecoration: this.props.todo.completed? 'line-through' : 'none'
    }
  }
  markDone = (e) => {
    console.log(this.props);
  }
  render() {
    const { id, title } = this.props.todo;
    return (
      <div style = {this.getStyle()}>
      <p>
      <input type="checkbox" onChange={this.props.markDone.bind(this, id)} /> {' '}
       {title}
       <button style ={btnStyle} onClick = {this.props.delTodo.bind(this, id)} >x</button>
       </p>
      </div>
    )
  }
}

//PropTypes
ToDoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default ToDoItem;
