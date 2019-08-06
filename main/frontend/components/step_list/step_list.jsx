import React from 'react';
import StepListItemContainer from './step_list_item_container';
import StepForm from './step_form';

class StepList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <ul>
        {this.props.steps.map(step => (
          <StepListItemContainer 
            key={step.id}
            step={step} 
          />
        ))}
        <StepForm 
          receiveStep={this.props.receiveStep}
          todo_id={this.props.todo_id}
          />
      </ul>
    )
  }
}

export default StepList;