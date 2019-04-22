import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar';
import Home from './components/home';
import CreateTodo from './components/todo-create';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Route path='/' exact component={Home} />
        <Route path='/todo' component={CreateTodo} />
      </Router>
    );
  }
}

export default App;
