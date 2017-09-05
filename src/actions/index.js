import { ADD_PLACE, REMOVE_PLACE, LOADING, ERROR } from '../constants';
import buildPlacesUrl from '../api';
import { updateStorage } from '../utils/storage';

function showErrorMessage() {
  return (dispatch, getState) => {
    return  Promise.resolve()
    .then(() => dispatch({
        type: ERROR
      })
    )
    .then(() => updateStorage('places', getState()))
  }
}

function getLocation() {
  let position = new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  })
  return (dispatch, getState) => {
    position.then(
      (pos) => {
        dispatch(getPlaceWeather(pos))
      },
        dispatch(getMyLocationfromIP())
    ); 
  };
}

function getMyLocationfromIP() {
  return (dispatch, getState) => {
    return Promise.resolve()
    .then(dispatch(setLoading()))
    .then(() => fetch('https://ipinfo.io/json')
      .then(response => response.json())
      .then((IpInfo) => {
        dispatch(getPlaceWeather(IpInfo.city))
      })
      .catch(() => dispatch(showErrorMessage()))
    )
    .then(() => updateStorage('places', getState()))    
  }
}

function getPlaceWeather(pos) {
  return (dispatch, getState) => {
    return Promise.resolve()
    .then(dispatch(setLoading()))
    .then(() => fetch(buildPlacesUrl(pos))
      .then(response => response.json())
      .then((place) => {
        dispatch({
          type: ADD_PLACE,
          id: place.id,
          place: {
            placeName: place.name,
            place,
          },
        })
      })
      .then(() => updateStorage('places', getState()))
      .catch(() => dispatch(showErrorMessage()))
    )
    .then(() => updateStorage('places', getState()))    
  }
}

export function setLoading() {
  return (dispatch, getState) => {
    return Promise.resolve()
    .then(() => dispatch({
        type: LOADING,
      })
    )
    .then(() => updateStorage('places', getState()))
  }
}

export function addPlace(getMyLocation, city) {
  if (getMyLocation) {
    return (dispatch) => dispatch(getLocation());
  }
  else return (dispatch) => dispatch(getPlaceWeather(city));
}

export function removePlaceById(id) {
  return (dispatch, getState) => {
    return Promise.resolve().then(() => dispatch({
      type: REMOVE_PLACE,
      id,
    }))
    .catch(dispatch(showErrorMessage()))
      .then(() => updateStorage('places', getState()))
  };
}

export function removePlace(id) {
  return (dispatch, getState) => {
    return dispatch(removePlaceById(id))
      .then(() => updateStorage('places', getState()));
  };
}


