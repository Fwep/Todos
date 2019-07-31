import { connect } from 'react-redux';
import StepListItem from './step_list_item';
import { removeStep, receiveStep } from '../../actions/step_actions';

const mDP = (dispatch, { step }) => ({
  removeStep: () => dispatch(removeStep(step)),
  receiveStep: (step) => dispatch(receiveStep(step))
});

export default connect(null, mDP)(StepListItem);