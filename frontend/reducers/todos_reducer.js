import { 
   RECEIVE_TODO,
   RECEIVE_TODOS,
   REMOVE_TODO
  } from '../actions/todo_actions';
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
    done: false
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_TODOS:
      action.todos.map((todo) => {
        newState[todo.id] = todo;
      })
      return newState;
    case RECEIVE_TODO:
     return merge({}, state, {[action.todo.id]: action.todo});
    case REMOVE_TODO:
      newState = merge({}, initialState);
      let {id} = action;
      delete newState[id];
      return newState;
    default:
      return state;
  }
}

export default todosReducer;