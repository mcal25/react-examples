/*
1. trigger in react
2. remove it


*/


import { Component } from 'react';
import Count from './Count';

class ClassInput extends Component {
  constructor(props) {
    super(props);


    // ['Just some demo tasks', 'As an example']
    this.state = {
      todos: [
        { name: 'Just some demo tasks', isEdit: false },
        { name: 'MORE example tasks', isEdit: false, },
      ],
      inputVal: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat({ name: state.inputVal, isEdit: false }),
      inputVal: '',
    }));
  }

  handleDelete(todoToDelete) {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => todo != todoToDelete)
    }));
  }

  handleEdit(todo) {
    todo.isEdit = true;
    this.setState((state) => ({
      todos: state.todos,
    }))
  }

  handleResubmit(todo) {

  }

  // 

  render() {
    console.log("I'M RERENDERING SCOTTY")
    return (
      <section>
        <h3>{this.props.name}</h3>
        <h1>{this.props.bullshit}</h1>
        <Count todos={this.state.todos} />
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            id='task-entry'
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo) => (
            todo.isEdit ? (
              <>
                <input
                  type="text"
                  onChange={(e) => {
                    todo.name = e.target.value
                    console.log(e.target.value);
                  }}
                />
                <button type='submit' onClick={() => {
                  // replace current todo with input text for this input
                  // rerender state after toggling isEdit off
                  todo.isEdit = false;
                  this.setState((state) => ({
                    todos: state.todos,
                  }));
                }
                }>Resubmit</button>
              </>
            ) : (
              <li
                key={todo.name}>{todo.name}
                <button type='button' onClick={() => this.handleDelete(todo)}>Delete</button>
                <button type='button' onClick={() => this.handleEdit(todo)}>Edit</button>
              </li>
            )
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
