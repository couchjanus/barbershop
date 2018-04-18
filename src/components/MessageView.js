import React, { Component } from 'react';

class MessageView extends Component {

    // fires before component is mounted
    // constructor(props) {
 
    //     // makes this refer to this component
    //     super(props);
 
    //     // set local state
    //     this.state = {
    //         date: new Date()
    //     };
 
    // }

  render() {

    const message = this.props.message;

    return(
      <div className="container">
        <div className="from">
        <p><span className="label">From: </span> {message.from} <b> 
         It is {new Date().toLocaleTimeString()}.</b></p>
        </div>
        <div className="status">
          <span className="label">Status: </span> {message.status}
        </div>
        <div className="message">
          <span className="label">Message: </span> {message.content}
        </div>
      </div>
    )
  }
}

export default MessageView;
