import { Appartment } from '../appartment/appartment';

import listAppartments from '../mocks/appartments.json';

import { BrowserRouter } from 'react-router-dom';

export function Appartments() {
  return (
    <BrowserRouter>
      <div>{listAppartments.appartments.map(instantiateAppartment)}</div>
    </BrowserRouter>
  );
}

function instantiateAppartment(appartment) {
  return (
    <Appartment
      id={appartment.id}
      street={appartment.street}
      price={appartment.price}
      numRooms={appartment.numRooms}
      squareMeters={appartment.squareMeters}
      position={appartment.position}
      elevator={appartment.elevator}
      description={appartment.description}
      images={appartment.images}
    />
  );
}
