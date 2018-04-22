import React from 'react';
import ServiceAPI from './api';
import { Link } from 'react-router-dom';


const ServiceView = (props) => {
  const service = ServiceAPI.get(
    parseInt(props.match.params.id, 10)
  );
  if (!service) {
    return <div>Sorry, but the service was not found</div>
  }
  return (
    <div>
      <h1>{service.name} (#{service.id})</h1>
      <h2>Service: {service.id}</h2>
      <Link to='/services'>Back</Link>
    </div>
  );
};

export default ServiceView;
