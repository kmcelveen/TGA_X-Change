import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './public/components/App';
import getReducers from './public/reducers/reducers';
let styles = require('./public/styles.css');

const store = createStore(getReducers);

render(
  <Provider store = {store}>
    <App/>
  </Provider>,
  document.getElementById('app'));

