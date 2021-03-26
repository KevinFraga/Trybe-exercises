import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Clients extends Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <p>Login efetuado.</p>
        <p>Bem-vindo { email }</p>
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
});

export default connect(mapStateToProps, null)(Clients);
