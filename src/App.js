//import React from 'react';
import Todos from './components/Todos';
import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id : 1,
        title: "Boom",
        completed: false
      },
      {
        id : 2,
        title: "Booom Boom",
        completed: false
      },
      {
        id : 3,
        title: "Boom Yes Boom",
        completed: false
      }
    ]
  }
  //toggle complete method
 markDone = (id) => {
   this.setState({ todos: this.state.todos.map(todo => {
     if(todo.id === id){
       todo.completed = !todo.completed
     }
     return todo;
   })
 });
 }

 //delete Method
delTodo = (id) => {
  console.log(id)

}


  render() {
    //console.log(this.state.todos)
    return(

    <div>
      <h2> dd todo ggg todo </h2>
      <Todos todos={this.state.todos} markDone = {this.markDone} delTodo ={this.delTodo}/>
    </div>
  );
  }
}
/*
function App() {
  return (
    <div className="App">
      <h1>test </h1>

    </div>
  );
}
   */
export default App;
