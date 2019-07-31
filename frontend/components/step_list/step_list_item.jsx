import React from 'react';
import merge from 'lodash/merge';

class StepListItem extends React.Component {
  constructor(props) {
    super(props);

    this.removeStep = this.removeStep.bind(this);
    this.toggleStep = this.toggleStep.bind(this);
  }

  removeStep(e) {
    e.preventDefault();
    let { step, removeStep } = this.props;
    removeStep(step);
  }

  toggleStep(e) {
    e.preventDefault();
    let { step, receiveStep } = this.props;
    let toggledStep = merge({}, step, {done: !step.done});
    receiveStep(toggledStep);
  }

  render() {
    let { step } = this.props;
    return (
      <li>
        <h4>{step.title}</h4>
        <h5>{step.body}</h5>
        <button onClick={this.removeStep}>Remove Step</button>
        <button onClick={this.toggleStep}>{step.done == true ? 'Undo' : 'Done'}</button>
      </li>
    );
  }
}

export default StepListItem;