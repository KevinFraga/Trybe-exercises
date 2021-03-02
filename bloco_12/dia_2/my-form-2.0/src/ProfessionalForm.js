import React, { Component } from 'react';

class ProfessionalForm extends Component {
  render() {
    const { changes } = this.props;
    return (
      <fieldset>
        <legend>Dados Profissionais</legend>
        <div>
          <label htmlFor='resume'>Resumo do Currículo: </label>
          <textarea id='resume' onChange={changes} name='resume' col='10' rows='7' maxLength='1000' required></textarea>
        </div>
        <div>
          <label htmlFor='role'>Último Cargo: </label>
          <input type='text' onChange={changes} id='role' name='role' maxLength='40' required />
        </div>
        <div>
          <label htmlFor='roleDescription'>Descrição do Último Cargo: </label>
          <textarea id='roleDescription' onChange={changes} name='roleDescription' col='5' rows='3' maxLength='500' required></textarea>
        </div>
      </fieldset>
    );
  }
}

export default ProfessionalForm;
