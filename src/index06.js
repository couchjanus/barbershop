import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App1 from './components/App1';
import './index.css';
import './index.scss';

ReactDOM.render(<App1 />, document.getElementById('root'));

registerServiceWorker();
