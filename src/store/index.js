import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { getStorage } from '../utils/storage';
import rootReducer from '../reducers';

const initialState = getStorage('places') ? getStorage('places') : {loading: false, places: {}}
initialState.error = false

const configureStore = () => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk),
  );

  return store;
};

export default configureStore();
