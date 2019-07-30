import React from 'react';

const TodoListItem = ({ todo, removeTodo, receiveTodo }) => (
  <li>
    <h3>{todo.title}</h3>
    <h4>{todo.body}</h4>
    <button onClick={() => removeTodo(todo.id)}>Delete Todo</button>
    <button onClick={() => receiveTodo(Object.assign(todo, {done: !todo.done}))}>{todo.done ? 'Undo' : 'Done'}</button>
  </li>
);

export default TodoListItem;