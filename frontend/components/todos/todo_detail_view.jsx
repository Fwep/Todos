import React from 'react';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { todo, removeTodo } = this.props;
    return (
      <>
      <h3>{todo.body}</h3>
      <button onClick={() => removeTodo(todo.id)}>Delete Todo</button>
      </>
    );
  }
}

export default TodoDetailView;