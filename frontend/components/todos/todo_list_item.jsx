import React from 'react';

const TodoListItem = ({ todo }) => (
  <li>
    <h3>{todo.title}</h3>
    <h4>{todo.body}</h4>
  </li>
);

export default TodoListItem;