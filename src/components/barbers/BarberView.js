import React from 'react';
import BarberAPI from './BarberAPI';
import { Link } from 'react-router-dom';
import ClientsContainer from '../clients';

const BarberView = (props) => {
  const barber = BarberAPI.get(
    parseInt(props.match.params.id, 10)
  );
  if (!barber) {
    return <div>Sorry, but the barber was not found</div>
  }
  return (
    <div>
      <h1>{barber.name} (#{barber.id})</h1>
      <h2>Barber: {barber.id}</h2>
      <ClientsContainer name={barber.name} clients={barber.clients} />
      <Link to='/barbers'>Back</Link>
    </div>
  );
};

export default BarberView;
