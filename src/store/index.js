import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import reducer from '../reducers';

//El combineReducers centraliza todos los reducers que se tenga
const reducers = combineReducers({
  lists: reducer,
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
