import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Client from './client';

class ClientList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: props.clients,
    }
  }
  render() {
    const { email } = this.props;
    const { clients } = this.state;
    return (
      <div>
        <p>Bem-vindo { email }</p>
        {clients.length < 1
          ? <p>Nenhum cliente cadastrado</p>
          : clients.map((client) => <Client client={ client } />)
        }
        <Link to="/newClient">
          Página de Cadastro
        </Link>
        <br />
        <Link to="/">
          Tela Inicial
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  email: state.loginReducer.user.email,
  password: state.loginReducer.user.password,
  clients: [state.newClientReducer.client],
});

export default connect(mapStateToProps, null)(ClientList);
