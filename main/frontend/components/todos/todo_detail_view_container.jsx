import { connect } from 'react-redux';
import { removeTodo } from '../../actions/todo_actions';
import { receiveSteps } from '../../actions/step_actions';
import TodoDetailView from './todo_detail_view';

const mDP = (dispatch, { todo }) => ({
  removeTodo: () => dispatch(removeTodo(todo.id)),
  receiveSteps: (steps) => dispatch(receiveSteps(steps))
})

export default connect(null, mDP)(TodoDetailView)