import React, { Component } from 'react';
import PersonalForm from './PersonalForm';
import ProfessionalForm from './ProfessionalForm';

class Form extends Component {
  render() {
    const { changes, blur, submit, clear } = this.props;
    return (
      <main>
        <PersonalForm changes={changes} blur={blur} />
        <ProfessionalForm changes={changes} />
        <button onClick={submit}>Enviar</button>
        <button onClick={clear}>Limpar</button>
      </main>
    );
  }
}

export default Form;
