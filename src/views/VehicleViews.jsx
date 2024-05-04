import React from 'react';
import './VehicleViews.css'

export default function VehicleView({vehicle}) {
  return (
    <div className='VehicleViews'>
        <h1>{vehicle.name}</h1>
        <h2>{vehicle.description}</h2>
        <img src={vehicle.image} alt={vehicle.name + " image" }/>
    </div>
  );
};