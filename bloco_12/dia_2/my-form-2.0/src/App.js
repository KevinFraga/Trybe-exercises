import React, { Component } from 'react';
import Form from './Form';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      addressType: '',
      resume: '',
      role: '',
      roleDescription: '',
      formError: {},
      submitted: false,
    }
    this.changes = this.changes.bind(this);
    this.blur = this.blur.bind(this);
  }

  validates(name, value) {
    switch (name) {
      case 'email' :
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{3})$/i);
        return isValid ? '' : 'is invalid';
      default:
        break;
    }
    return '';
  }

  stateSetter(name, value) {
    this.setState((state) => ({
      [name]: value,
      formError: {
        ...state.formError,
        [name]: this.validates(name, value),
      },
    }));
  }

  changes(event) {
    let { name, value } = event.target;
    if (name === 'name') value = value.toUpperCase();
    if (name === 'address') value = value.replace(/[^\w\s]/gi, '');
    this.stateSetter(name, value);
  }
  
  blur(event) {
    let { name, value } = event.target;
    if (name === 'city') value = value.match(/^\d/) ? '' : value;
    this.stateSetter(name, value);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Form changes={this.changes} blur={this.blur} />
        </header>
      </div>
    );
  }
}

export default App;
