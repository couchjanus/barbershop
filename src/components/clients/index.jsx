import React from 'react';
import ReactDOM from 'react-dom';

class AddClient extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newClient: ''
    }

    this.updateNewClient = this.updateNewClient.bind(this)
    this.handleAddNew = this.handleAddNew.bind(this)
  }
  updateNewClient(e) {
    this.setState({
      newClient: e.target.value
    })
  }
  handleAddNew() {
    this.props.addNew(this.state.newClient)
    this.setState({
      newClient: ''
    })
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.newClient}
          onChange={this.updateNewClient}
        />
        <button onClick={this.handleAddNew}> Add Client </button>
      </div>
    )
  }
}

class ShowList extends React.Component {
  render() {
    return (
      <div>
        <h3> Clients </h3>
        <ul>
          {this.props.names.map((client) => {
            return <li> {client} </li>
          })}
        </ul>
      </div>
    )
  }
}

export default class ClientsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: this.props.name,
      clients: this.props.clients,
    }

    this.addClient = this.addClient.bind(this)
  }
  addClient(client) {
    this.setState((state) => ({
        clients: state.clients.concat([client])
    }))
  }
  render() {
    return (
      <div>
        <h3> Name: {this.state.name} </h3>
        <AddClient addNew={this.addClient} />
        <ShowList names={this.state.clients} />
      </div>
    )
  }
}
