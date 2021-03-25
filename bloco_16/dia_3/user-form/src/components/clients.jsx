import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Clients extends Component {
  render() {
    return (
      <div>
        <p>Login efetuado.</p>
        <Link to="/">
          Tela Inicial
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginState: state.loginReducer.state,
});

export default connect(mapStateToProps, null)(Clients);
