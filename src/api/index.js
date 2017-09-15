export const API_KEY = 'e0ec04c1590b910c62ae59934dbcbdc0';
export const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

export default function buildPlacesUrl(placeLocation) {
  if (placeLocation instanceof Object) {
    return `${API_URL}?APPID=${API_KEY}&units=metric&lon=${placeLocation.coords.longitude}&lat=${placeLocation.coords.latitude}`;
  }
  else return `${API_URL}?APPID=${API_KEY}&units=metric&q=${placeLocation}`;
}
