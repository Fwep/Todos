import { RECEIVE_TODO, RECEIVE_TODOS} from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_TODOS:
      let todos = {};
      action.todos.map((todo) => {
        todos[todo.id] = todo;
      })
      newState = merge({}, todos);
      return newState;
    case RECEIVE_TODO:
      newState = merge({}, initialState, {[action.todo.id]: action.todo});
      return newState;
    default:
      return state;
  }
}

export default todosReducer;