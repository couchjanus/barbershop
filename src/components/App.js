import React from 'react';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/fontawesome-free-solid';
import brands from '@fortawesome/fontawesome-free-brands';

import {Header, Main, Footer}  from './layout';

fontawesome.library.add(brands, faCoffee);


const App = () => (
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
)

export default App;
