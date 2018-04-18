import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App2 from './components/App2';
import './index.css';
import './index.scss';

ReactDOM.render(<App2 />, document.getElementById('root'));

registerServiceWorker();
