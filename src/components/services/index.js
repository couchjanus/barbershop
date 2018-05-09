import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ServiceList from './ServiceList';
import ServiceView from './ServiceView';

const Services = () => (
  <Switch>
    <Route exact path='/services' component={ServiceList}/>
    <Route path='/services/:id' component={ServiceView}/>
  </Switch>
)

export default Services;
