import React from 'react';
import merge from 'lodash/merge';
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: false
    }

    this.toggleDetail = this.toggleDetail.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  toggleDetail(e) {
    e.preventDefault();
    this.setState(merge({}, this.state, {detail: !this.state.detail}));
  }

  toggleTodo(e) {
    e.preventDefault();
    let toggledTodo = merge({}, this.props.todo, {done: !this.props.todo.done})

    this.props.receiveTodo(toggledTodo);
  }

  render() {
    let { todo } = this.props;
    return (
      <li>
        <h2><a onClick={this.toggleDetail}>{todo.title}</a></h2>
        <button onClick={this.toggleTodo}>{todo.done ? 'Undo' : 'Done'}</button>
        {this.state.detail && <TodoDetailViewContainer todo={todo} />}
      </li>
    );
  }
}

export default TodoListItem;