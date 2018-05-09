import React from 'react';
import { Link } from 'react-router-dom';

import styles from './index.scss';

const Header = () => (
  <header>
    <nav>
        <ul className={styles.flexMenu}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/barbers'>Barbers</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
    </nav>
  </header>
)

export default Header
