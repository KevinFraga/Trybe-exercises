import React, { Component } from 'react';
import PersonalForm from './PersonalForm';

class Form extends Component {
  render() {
    const { changes, blur } = this.props;
    return (
      <PersonalForm changes={changes} blur={blur} />
    );
  }
}

export default Form;
