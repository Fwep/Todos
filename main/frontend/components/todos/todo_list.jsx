import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = (props) => (
  <>
    <ul>
      {props.todos.map(todo => (
        <TodoListItem 
          todo={todo} 
          key={todo.id}
          removeTodo={props.removeTodo}
          receiveTodo={props.receiveTodo}
        />
      ))}
    </ul>
    <TodoForm receiveTodo={props.receiveTodo} />
  </>
)

export default TodoList;