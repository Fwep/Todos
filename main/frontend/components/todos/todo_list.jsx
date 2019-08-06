import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <>
        <ul>
          {this.props.todos.map(todo => (
            <TodoListItem 
              todo={todo} 
              key={todo.id}
              removeTodo={this.props.removeTodo}
              receiveTodo={this.props.receiveTodo}
            />
          ))}
        </ul>
        <TodoForm 
        receiveTodo={this.props.receiveTodo} 
        createTodo={this.props.createTodo}
        />
      </>
    );
  }
}


export default TodoList;