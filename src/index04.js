import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import './index.scss';

class App extends Component {

    render(){
      return (
        <div>
          <h1>Hello World Again!</h1>
        </div>
      )
    }
  
  }

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
