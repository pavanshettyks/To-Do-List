//import React from 'react';
import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import Header from './components/layout/Header';
import uuid from 'uuid';



import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id : uuid.v4(),
        title: "Boom",
        completed: false
      },
      {
        id : uuid.v4(),
        title: "Booom Boom",
        completed: false
      },
      {
        id : uuid.v4(),
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
  this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});

}

//adding
addTodo = (title) => {
  console.log(title)
  const newTodo = {
    id: uuid.v4(),
    title: title,
    completed: false
  }
  this.setState({ todos: [...this.state.todos, newTodo] });
}


  render() {
    //console.log(this.state.todos)
    return(
   <Router>
    <div className="App">
      <div ClassName="container">
        <Header />
        <Route path="/" render= {props => (
          <React.Fragment>
              <AddTodo addTodo= {this.addTodo}/>
              <h2> dd todo ggg todo </h2>
              <Todos todos={this.state.todos}
              markDone = {this.markDone} delTodo ={this.delTodo}/>
          </React.Fragment>
        )} />
        <Route path="/about"  component ={About} />

      </div>
    </div>
    </Router>
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
