// import React from 'react';

import React, { Component } from 'react';

import ReactDOM from 'react-dom';

// import './index.css';
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';


// ReactDOM.render(<h1>Hello React!</h1>, document.getElementById('root'));


// const element = <h1>Hello React element!</h1>;

// const user = {
//     firstName: "Jane",
//     lastName: "Doe"
//   }

// const element = 
//     <span>
//         <h1>Hello React user!</h1>
//         <p>Hello, {user.firstName} {user.lastName}</p>
//     </span>;

// ReactDOM.render(element, document.getElementById('root'));

// class App extends Component {

//     render(){
//       return (
//         <div>
//           <h1>Hello World Again!</h1>
//         </div>
//       )
//     }
  
//   }


ReactDOM.render(<App />, document.getElementById('root'));


registerServiceWorker();
