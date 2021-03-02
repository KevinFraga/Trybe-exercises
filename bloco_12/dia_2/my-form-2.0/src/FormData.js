import React, { Component } from 'react';

class FormData extends Component {
  render() {
    const {
      name,
      email,
      cpf,
      address,
      city,
      state,
      addressType,
      resume,
      role,
      roleDescription,
    } = this.props.currState;
    return (
      <div>
        <h2>Dados enviados</h2>
        <h3>Pessoal</h3>
        <div> Name: {name}</div>
        <div> Email: {email}</div>
        <div> CPF: {cpf}</div>
        <div> Endereço: {address}</div>
        <div> Cidade: {city}</div>
        <div> Estado: {state}</div>
        <div> Tipo de residência: {addressType}</div>
        <h3>Profissional</h3>
        <div> Currículo: {resume}</div>
        <div> Cargo: {role}</div>
        <div> Descrição do cargo: {roleDescription}</div>
      </div>
    );
  }
}

export default FormData;
