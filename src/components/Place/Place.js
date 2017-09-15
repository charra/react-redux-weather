import React from 'react';
import './Place.css';

export default function Place(props) {
  const { place: currentPlace, removePlace } = props;
  const { placeName } = props;
  const { temp } = currentPlace.main;


  return (
    <div className="place">
      <span className="place-inner-item place-name">{placeName}</span>
      <span className="place-inner-item">Temp.: <br /> {Math.ceil(temp)} &deg;C</span>
      <span
        className="place-inner-item place-icon"
        onClick={removePlace}
        role="button"
        tabIndex="0"
        title="Remove place"
      >
        <span className="place-remove" />
      </span>
    </div>
  );
}
