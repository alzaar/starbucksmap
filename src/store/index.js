import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import shopsReducer from '../reducers/shopsReducer';



const store = createStore(
  shopsReducer,
  applyMiddleware(logger)
);

export default store;
