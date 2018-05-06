import React from 'react';
import { Link } from 'react-router-dom';

import ServiceAPI from './api';


const ServiceList = () => (
    <div>
      <ul>
        {
          ServiceAPI.all().map(p => (
            <li key={p.id}>
              <Link to={`/services/${p.id}`}>{p.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )

export default ServiceList;
