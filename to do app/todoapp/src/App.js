import React, {Component} from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'
import NavBar from './Components/NavBar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './Components/Home'
import Contact from './Components/Contact'
import AboutUs from './Components/AboutUs'
import Post from './Components/Post'

class App extends Component {

  state = {
    todos: [
      {id: 1, content:'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id != id;
    })
    this.setState({
      todos: todos
    })
  }

  addTodo = (todo) => {
    todo.id = this.state.todos.length + 1;
    let todos = [...this.state.todos, todo]
    this.setState({
      todos: todos
    })
  }


  ToDoContainer = (
      <div className="todo-app container">
            <h1 className="center blue-text">Todo's</h1>
            <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
            <AddTodo addTodo={this.addTodo}/>
        </div>
    )

  render(){
    return (
      <BrowserRouter>
        <div>
          <NavBar/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/about' component={AboutUs}/>
            <Route path='/post/:post_id' component={Post}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  } 
}

export default App;
