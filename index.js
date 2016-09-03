import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './src/App';
import getReducers from './src/reducers/reducers';

//NOTE: Is there a reason we are importing styles here?
let styles = require('./styles.css');

const store = createStore(getReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
