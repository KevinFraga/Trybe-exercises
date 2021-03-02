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
  }

  changes(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Form />
        </header>
      </div>
    );
  }
}

export default App;
