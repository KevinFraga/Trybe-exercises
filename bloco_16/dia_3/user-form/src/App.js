import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Failed from './components/failed';
import Clients from './components/clients';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/login" component={ Login } />
        <Route path="/clients" component={ Clients } />
        <Route path="/" component={ Failed } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
