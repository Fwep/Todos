export const allTodos = ({ todos }) => {
  return Object.keys(todos).map(id => {
    return todos[id];
  });
}

export const stepsByTodoId = ({ steps }, todoId) => {
  let stepsArr = [];
  for (let id in steps) {
    if (steps[id].todo_id == todoId) {
      stepsArr.push(steps[id])
    }
  }
  return stepsArr;
}