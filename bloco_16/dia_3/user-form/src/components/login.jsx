import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginAction } from '../actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: '',
      },
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler({ target: { name, value } }) {
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value,
      }
    });
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        <form>
          <div>
            <label htmlFor="email">
              E-mail:
              <input
                type="email"
                name="email"
                id="email"
                value={ user.email }
                onChange={ this.changeHandler }
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Senha:
              <input
                type="text"
                name="password"
                id="password"
                value={ user.password }
                onChange={ this.changeHandler }
              />
            </label>
          </div>
        </form>
        <Link to="/ClientList" onClick={ () => this.props.loginDispatch(this.state) }>
          Entrar
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loginDispatch: state => dispatch(loginAction(state)),
});

export default connect(null, mapDispatchToProps)(Login);
