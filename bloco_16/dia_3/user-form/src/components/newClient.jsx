import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { newClientAction } from '../actions';

class NewClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      client: {
        name: '',
        age: 0,
        email: '',
      },
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler({ target: { name, value } }) {
    const { client } = this.state;
    this.setState({
      client: {
        ...client,
        [name]: value,
      }
    });
  }

  render() {
    const { name, age, email } = this.state.client;
    return (
      <div>
        <form>
          <div>
            <label htmlFor="newName">
              Nome:
              <input
                type="text"
                id="newName"
                name="name"
                value={ name }
                onChange={ this.changeHandler }
              />
            </label>
          </div>
          <div>
            <label htmlFor="newAge">
              Idade:
              <input
                type="number"
                id="newAge"
                name="age"
                value={ age }
                onChange={ this.changeHandler }
              />
            </label>
          </div>
          <div>
            <label htmlFor="newEmail">
              E-mail:
              <input
                type="email"
                id="newEmail"
                name="email"
                value={ email }
                onChange={ this.changeHandler }
              />
            </label>
          </div>
          <div>
            <button
              type="button"
              onClick={ () => this.props.newClientDispatch(this.state) }
            >
              Salvar
            </button>
          </div>
        </form>
        <Link to="/ClientList">
          Clientes Cadastrados
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  newClientDispatch: state => dispatch(newClientAction(state)),
});

export default connect(null, mapDispatchToProps)(NewClient);
