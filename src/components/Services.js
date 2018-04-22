import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ServiceList from './services/ServiceList';
import ServiceView from './services/ServiceView';

const Services = () => (
  <Switch>
    <Route exact path='/services' component={ServiceList}/>
    <Route path='/services/:id' component={ServiceView}/>
  </Switch>
)

export default Services;
