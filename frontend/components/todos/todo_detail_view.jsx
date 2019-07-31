import React from 'react';
import StepListContainer from '../step_list/step_list_container';

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
      <StepListContainer 
        todo_id={todo.id}
      />
      </>
    );
  }
}

export default TodoDetailView;