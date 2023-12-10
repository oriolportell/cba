import React from 'react';
import './appartment.css';
import { Link } from 'react-router-dom';

export function Appartment({
  id,
  street,
  price,
  numRooms,
  squareMeters,
  position,
  elevator,
  description,
  images,
}) {
  return (
    <Link to={`/appartment/${id}`} className='carda'>
      <div className='main-view'>
        <div className='card'>
          <img
            className='image-style'
            src='https://nurseworld.blob.core.windows.net/nurse-world-back/images.jpg'
          />
          <div className='apartment-information style-info'>
            <span className='title style-info'>{street}</span>
            <p className='price style-info'>{price} €/mes</p>
            <p className='characteristics style-info '>
              {numRooms} hab {squareMeters}m² {position} {elevator}
            </p>
            <p className='style-info'>{description}</p>
          </div>
          <div className='card-detail-orange'></div>
        </div>
      </div>
    </Link>
  );
}
