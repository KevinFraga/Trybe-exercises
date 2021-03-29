import React, { Component } from 'react';

class Client extends Component {
  render() {
    const { name, age, email } = this.props.client;
    return (
      <div>
        <h2>{ name }</h2>
        <p>{ age } anos</p>
        <p>{ email }</p>
      </div>
    );
  }
}

export default Client;
