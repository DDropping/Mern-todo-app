import React, { Component } from 'react';
import axios from 'axios';
import List from './todo-list';

export default class CreateTodo extends Component {
  constructor(props) {
    super(props);

    this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
    this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      todo_description: '',
      todo_responsible: ''
    };
  }

  onChangeTodoDescription(e) {
    this.setState({
      todo_description: e.target.value
    });
  }

  onChangeTodoResponsible(e) {
    this.setState({
      todo_responsible: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Todo Description: ${this.state.todo_description}`);
    console.log(`Todo Responsible: ${this.state.todo_responsible}`);

    const newTodo = {
      todo_description: this.state.todo_description,
      todo_responsible: this.state.todo_responsible
    };

    axios
      .post('http://localhost:4000/todos/add', newTodo)
      .then(res => console.log(res.data));

    this.setState({
      todo_description: '',
      todo_responsible: ''
    });
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <div className='container'>
          <h3>Create New Todo</h3>
          <form onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label>Description: </label>
              <input
                type='text'
                className='form-control'
                value={this.state.todo_description}
                onChange={this.onChangeTodoDescription}
              />
            </div>
            <div className='form-group'>
              <label>Responsible: </label>
              <input
                type='text'
                className='form-control'
                value={this.state.todo_responsible}
                onChange={this.onChangeTodoResponsible}
              />
            </div>
            <div className='form-group'>
              <input
                type='submit'
                value='Create Todo'
                className='btn btn-primary'
              />
            </div>
          </form>
        </div>
        <List />
      </div>
    );
  }
}
