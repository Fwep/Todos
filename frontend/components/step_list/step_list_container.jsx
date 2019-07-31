import { connect } from 'react-redux';
import { receiveStep } from '../../actions/step_actions';
import { stepsByTodoId } from '../../reducers/selectors';
import StepList from './step_list';


const mSP = (state, {todo_id}) => ({
  steps: stepsByTodoId(state, todo_id),
  todo_id
});

const mDP = (dispatch) => ({
  receiveStep: (step) => dispatch(receiveStep(step))
});

export default connect(mSP, mDP)(StepList)