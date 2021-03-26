import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Failed from './components/failed';
import ClientList from './components/clientList';
import NewClient from './components/newClient';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/login" component={ Login } />
        <Route path="/clientList" component={ ClientList } />
        <Route path="/newClient" component={ NewClient } />
        <Route path="/" component={ Failed } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
