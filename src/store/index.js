import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { getStorage } from '../utils/storage';
import rootReducer from '../reducers';

const initialState = getStorage('places') ? getStorage('places') : {loading: false, error: false, places: {}};

const configureStore = () => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk),
  );

  return store;
};

export default configureStore();
