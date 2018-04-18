import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import './index.scss';

const element = <h1>Hello React element!</h1>;

ReactDOM.render(element, document.getElementById('root'));

registerServiceWorker();
