import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar';
import CreateTodo from './components/create-todo.component';
import EditTodo from './components/edit-todo.component';
import TodosList from './components/todos-list.component';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Route path='/' exact component={TodosList} />
        <Route path='/edit/:id' component={EditTodo} />
        <Route path='/create' component={CreateTodo} />
      </Router>
    );
  }
}

export default App;
