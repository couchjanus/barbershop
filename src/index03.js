import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import './index.scss';

const user = {
    firstName: "Janus",
    lastName: "Nic"
  }

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
  
const element = 
    <span>
        <h1>Hello React user!</h1>
        <p>Hello, {user.firstName} {user.lastName}</p>
    </span>;

// <h2>Hello, {formatName(user)}!</h2>

ReactDOM.render(element, document.getElementById('root'));

registerServiceWorker();
