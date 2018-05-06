import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BarberList.scss';
import BarberAPI from './BarberAPI';

const BarberList = () => {
    // toggleAvailable: () => {}
    return (
        <ul className={styles.barberList}>
        {
          BarberAPI.all().map(b => (
            <li key={b.id}>
              <Link to={`/barbers/${b.id}`}>{b.name}</Link>
              <span>{b.available ? 'Available' : 'Not Available'}</span>
              <button>Toggle Available</button>
            </li>
          ))
        }
      </ul>
      );
    }

export default BarberList;
