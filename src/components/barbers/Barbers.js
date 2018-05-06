import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import styles from './BarberList.scss';
import BarberAPI from './BarberAPI';


// Container Component

export default class BarbersContainer extends React.Component {
    constructor(props) {
        super(props)
        this.toggleAvailable = this.toggleAvailable.bind(this);
        this.state = { barbers: BarberAPI.all() }
    }

  render() {
    return (<Barbers barbers={this.state.barbers} toggleAvailable={this.toggleAvailable} />);
  }

  toggleAvailable(barberId) {
    var newState = Object.assign({}, this.state)
    var barber = _.find(newState.barbers, {id: barberId});
    barber.available = !barber.available
    this.setState(newState)
  }
}

class Barbers extends React.Component { 
    render() {
        let _this = this;
        return (
            <ul className={styles.barberList}>
            {this.props.barbers.map( function(b) {
                return (
                <li key={b.id}>
                <Link to={`/barbers/${b.id}`}>{b.name}</Link>
                <span>{b.available ? 'Available' : 'Not Available'}</span>
                <button onClick={_this.props.toggleAvailable.bind(null, b.id)}>Toggle Available</button>
                </li>
            )})
            }
        </ul>
        );
    }
}
