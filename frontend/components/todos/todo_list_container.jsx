import React from 'react';
import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import { receiveTodo } from '../../actions/todo_actions';

const mSP = (state) => ({
  todos: allTodos(state)
});

const mDP = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
})

export default connect(mSP, mDP)(TodoList);