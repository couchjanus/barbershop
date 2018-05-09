import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BarbersContainer from './BarberList';
import BarberView from './BarberView';

const Barbers = () => (
  <Switch>
    <Route exact path='/barbers' component={BarbersContainer}/>
    <Route path='/barbers/:id' component={BarberView}/>
  </Switch>
)

export default Barbers;
