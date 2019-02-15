import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import DetailMessage from './components/DetailMessage';

export default (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/message/:id" component={DetailMessage} />
  </Switch>
);
