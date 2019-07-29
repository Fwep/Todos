export const allTodos = ({ todos }) => {
  return Object.keys(todos).map(id => {
    return todos[id];
  });
}

window.allTodos = allTodos;