import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  removeTodo(e) {
    e.preventDefault();
    this.props.deleteTodo({id: this.props.todo.id});
  }

  buttonText() {
    return (this.props.todo.done ? "Done" : "Undone");
  }

  updateTodo(e) {
    e.preventDefault();
    this.props.todo.done = !this.props.todo.done;
    this.props.updateTodo(this.props.todo);
  }

  render() {
    const doneButtonText = this.buttonText();

    return (
      <ul className='todo-list-item'>
        <li className='todo-title'>Title: {this.props.todo.title}</li>
        <li className='todo-body'>Body: {this.props.todo.body}</li>
        <li>
          <button className='done-btn' onClick={this.updateTodo}>{doneButtonText}</button>
          <button className='delete-btn' onClick={this.removeTodo}>Delete</button>
        </li>
        <br />
      </ul>
    );
  }
}

export default TodoListItem;
