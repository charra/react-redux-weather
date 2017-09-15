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
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
  return (dispatch) => {
    position.then(
      (pos) => {
        return dispatch(getPlaceWeather(pos))
      },
      () => {
        return dispatch(getMyLocationfromIP())
      }
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
      .then(() => updateStorage('places', getState()))
    )
    .catch(() => dispatch(showErrorMessage()))
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
    return (dispatch) => dispatch(getLocation())
  }
  else if (!getMyLocation && city) {
    return (dispatch) => dispatch(getPlaceWeather(city))
  }
  else if (!getMyLocation && !city) {
    return
  }
}

export function removePlaceById(id) {
  return (dispatch, getState) => {
    return Promise.resolve().then(() => dispatch({
      type: REMOVE_PLACE,
      id,
    }))
    .then(() => updateStorage('places', getState()))
  };
}

export function removePlace(id) {
  return (dispatch, getState) => {
    return dispatch(removePlaceById(id))
  };
}


