import React from 'react';
import merge from 'lodash/merge';
import {uniqueId} from '../../util/util';


class StepForm extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      body: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field, e) {
    e.preventDefault();
    this.setState({[field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let { receiveStep, todo_id } = this.props;

    let nullStep = {
      id: uniqueId(),
      title: null,
      body: null,
      done: false,
      todo_id
    } 

    let step = merge({}, nullStep, this.state);
    receiveStep(step);
    this.setState({title: '', body: ''});
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="step-title">Step</label>
        <input 
          id="step-title"
          name="step[title]"
          type="text"
          value={this.state.title}
          onChange={(e) => this.handleChange('title', e)}
        />

        <label htmlFor="step-body">Body</label>
        <textarea 
          id="step-body"
          name="step[body]"
          value={this.state.body}
          onChange={(e) => this.handleChange('body', e)}
        />
        
        <input 
          value="Create Step"
          type="submit"
        />
      </form>
    )
  }
}

export default StepForm;