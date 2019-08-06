import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchTodos } from './util/todo_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ? JSON.parse(localStorage.state) : {};
  const root = document.getElementById('content');
  const store = configureStore(preloadedState);
  ReactDOM.render(<Root store={store} />, root);
});
