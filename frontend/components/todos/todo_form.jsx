import React from 'react';
import { uniqueId } from '../../util/util';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({[e.target.id]: e.target.value}, console.log(this.state));
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let newTodo = {
      id: uniqueId(), 
      title: this.state.title,
      body: this.state.body,
      done: false
    }
    this.props.receiveTodo(newTodo);
    this.setState({title: '', body: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="todo-title">Title:</label>
        <input 
          id="title"
          name="todo[title]"
          placeholder="Walk the dog"
          value={this.state.title}
          onChange={this.handleChange}
        />

        <label htmlFor="todo-body">Body:</label>
        <textarea
          id="body"
          name="todo[body]"
          placeholder="Walk Loki at Gellert Park"
          value={this.state.body}
          onChange={this.handleChange}
        />

        <input type="submit" value="Create Todo" />
      </form>
    )
  }
}

export default TodoForm;