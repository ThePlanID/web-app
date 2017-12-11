import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import reducers from './reducers/';

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
);

export default store;
