import React from 'react';

import Place from '../Place/Place';

export default function PlaceList(props) {
  let places = [];
  const isNotEmpty = Object.keys(props.places.places).length > 0;

  if (props.places && isNotEmpty) {
    places = Object.keys(props.places.places).map((key) => {
      const { place, placeName } = props.places.places[key];
      return (
        <Place
          key={place.id}
          id={place.id}
          place={place}
          placeName={placeName}
          removePlace={() => props.removePlace(place.id)}
        />
      );
    });
  } 
  else {
    places = <h3 className="place-empty">No places to show.</h3>;
  }

  return (
    <div>
      {places}
    </div>
  );
}

