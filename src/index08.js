import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App3 from './components/App3';
import './index.css';
import './index.scss';

ReactDOM.render(<App3 />, document.getElementById('root'));

registerServiceWorker();
