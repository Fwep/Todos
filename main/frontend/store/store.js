import { createStore, applyMiddleware } from 'redux';
import { thunk } from '../middleware/thunk';
import rootReducer from '../reducers/root_reducer';
import { fetchTodos } from '../actions/todo_actions';

const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk));
  window.store = store;
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState())
  });
  return store;
}

export default configureStore;