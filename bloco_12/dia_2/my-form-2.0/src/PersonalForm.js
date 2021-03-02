import React, { Component } from 'react';

class PersonalForm extends Component {
  render() {
    const { changes, blur } = this.props;
    return (
      <fieldset>
        <legend>Dados Pessoais</legend>
        <div>
          <label htmlFor='name'>Nome: </label>
          <input type='text' onChange={changes} id='name' name='name' maxLength='40' required />
        </div>
        <div>
          <label htmlFor='email'>E-mail: </label>
          <input type='email' onChange={changes} id='email' name='email' maxLength='50' required />
        </div>
        <div>
          <label htmlFor='cpf'>CPF: </label>
          <input type='text' onChange={changes} id='cpf' name='cpf' maxLength='11' required />
        </div>
        <div>
          <label htmlFor='address'>Endereço: </label>
          <input type='text' onChange={changes} id='address' name='address' maxLength='200' required />
        </div>
        <div>
          <label htmlFor='city'>Cidade: </label>
          <input type='text' onChange={changes} onBlur={blur} id='city' name='city' maxLength='28' required />
        </div>
        <div>
          <label htmlFor='state'>Estado: </label>
          <select id='state' onChange={changes} name='state'>
            <option value=''></option>
            <option value='AC'>Acre</option>
            <option value='AL'>Alagoas</option>
            <option value='AP'>Amapá</option>
            <option value='AM'>Amazonas</option>
            <option value='BA'>Bahia</option>
            <option value='CE'>Ceará</option>
            <option value='DF'>Distrito Federal</option>
            <option value='ES'>Espírito Santo</option>
            <option value='GO'>Goiás</option>
            <option value='MA'>Maranhão</option>
            <option value='MT'>Mato Grosso</option>
            <option value='MS'>Mato Grosso do Sul</option>
            <option value='MG'>Minas Gerais</option>
            <option value='PA'>Pará</option>
            <option value='PB'>Paraíba</option>
            <option value='PR'>Paraná</option>
            <option value='PE'>Pernambuco</option>
            <option value='PI'>Piauí</option>
            <option value='RJ'>Rio de Janeiro</option>
            <option value='RN'>Rio Grande do Norte</option>
            <option value='RS'>Rio Grande do Sul</option>
            <option value='RO'>Rondônia</option>
            <option value='RR'>Roraima</option>
            <option value='SC'>Santa Catarina</option>
            <option value='SP'>São Paulo</option>
            <option value='SE'>Sergipe</option>
            <option value='TO'>Tocantins</option>
          </select>
        </div>
        <div>
          <label htmlFor='house'> Casa: 
            <input type='radio' onChange={changes} id='house' name='addressType' value='house' required />
          </label>
          <label htmlFor='apartment'> Apartamento: 
            <input type='radio' onChange={changes} id='apartment' name='addressType' value='apartment' />
          </label>
        </div>
      </fieldset>
    );
  }
}

export default PersonalForm;
