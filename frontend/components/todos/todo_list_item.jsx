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
  }

  toggleDetail(e) {
    e.preventDefault();
    this.setState(merge({}, this.state, {detail: !this.state.detail}));
  }

  render() {
    let {receiveTodo, todo} = this.props
    return (
      <li onClick={this.toggleDetail}>
        <h3>{todo.title}</h3>
        <button onClick={() => receiveTodo(Object.assign(todo, { done: !todo.done }))}>{todo.done ? 'Undo' : 'Done'}</button>
        {this.state.detail && <TodoDetailViewContainer todo={todo} />}
      </li>
    )
  }
}

export default TodoListItem;