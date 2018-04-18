import React, { Component } from 'react';

class ServiseView extends Component {

  render() {

    const servise = this.props.servise;

    return(
      <div className="container">
        <div className="from">
        <p><span className="label">Id: </span> {servise.id} <b> 
         It is {new Date().toLocaleTimeString()}.</b></p>
        </div>
        <div className="status">
          <span className="label">Servise: </span> {servise.servise}
        </div>
        <div className="message">
          <span className="label">Price: </span> {servise.price}
        </div>
      </div>
    )
  }
}

export default ServiseView;
