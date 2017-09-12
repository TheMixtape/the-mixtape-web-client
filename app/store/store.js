import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';

const middlewares = applyMiddleware(promise(), thunk, createLogger());

/* eslint-disable no-underscore-dangle, no-undef */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    middlewares,
  ),
);
/* eslint-enable */

export default store;
