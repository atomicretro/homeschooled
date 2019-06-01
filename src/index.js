import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import RootReducer from './reducers/root_reducer';
import Root from './components/root';

import './stylesheets/css/reset.css';

const store = createStore(RootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Root store={ store } />,
  document.getElementById('root')
);
