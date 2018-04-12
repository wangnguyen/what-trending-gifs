/**
 * My Application
 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ContainerList from './containers/list';
import ContainerDetail from './containers/detail';

const App = () => (
  <Switch >
    <Route exact path='/detail' component={ContainerDetail} />
    <Route path='/' component={ContainerList} />
  </Switch>
);

export default App;

