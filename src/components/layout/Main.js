import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Home, About, Contact} from '../pages';

import Services from '../services';
import Barbers from '../barbers';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/services' component={Services}/>
      <Route path='/barbers' component={Barbers}/>
      <Route path='/contact' component={Contact}/>
    </Switch>
  </main>
)

export default Main
