import {
  ADD_PLACE,
  REMOVE_PLACE,
  LOADING,
  ERROR,
} from '../constants';

export default function reducer(state = {loading: false, error: false, places: {}}, action) {
  switch (action.type) {
    case ADD_PLACE:
      return {
        loading: false,
        error: false,
        places: {...state.places,
            [action.id]: action.place,
          }
      };

    case REMOVE_PLACE:
      let newStore = {loading: false, error: false, places: {}};
      let id;
      for (id in state.places) {
        if (state.places.hasOwnProperty(id) && (parseInt(id, 10) !== action.id)) {
          newStore.places[id] = state.places[id];
        }
      }
      return newStore;

    case LOADING:
      return {
        loading: true,
        error: false,
        places: {...state.places,
          }
      };
    
    case ERROR:
      return {
        loading: false,
        error: true,
        places: {...state.places,
          }
      };

    default:
      return state;
  }
}