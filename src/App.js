import React, { Component } from 'react'
import Todos from "./components/todos/Todos"
import Header from "./components/header/Header"

import './App.css';


class App extends Component {
  state = {
    todos:[
      {
        id:"1",
        title:"Take out trash",
        completed: false
      },
      {
        id:"2",
        title:"Dinner with family",
        completed: true
      },
      {
        id:"3",
        title:"Soccer Practice",
        completed: false
      }
    ]
  }
  toggleCheck=(id) => {
    this.setState({todos:[this.state.todos.map(todo =>{
      if(todo.id===id){
        todo.completed=!todo.completed;
      }
      return todo;
    }
        )]});
}

delTodo=(id)=>{
this.setState({todos: [...this.state.todos.filter(todo=>
  todo.id!==id
)]});
}
  render() {
    return (
      <h1 className="App">
        <Header></Header>
        <Todos todos={this.state.todos} toggleCheck ={this.toggleCheck} delTodo={this.delTodo}/>
      </h1>
    )
  }
}

export default App;