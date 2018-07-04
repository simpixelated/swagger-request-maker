import React from 'react';
import ReactDOM from 'react-dom';
import $RefParser from 'json-schema-ref-parser';
import Root from '../../app/containers/Root';
import './app.css';

chrome.storage.local.get('swagger', ({ swagger }) => {
  $RefParser
    .dereference(swagger)
    .then(schema => {
      const initialState = { swagger: schema };
      const createStore = require('../../app/store/configureStore');
      ReactDOM.render(<Root store={createStore(initialState)} />, document.querySelector('#root'));
    })
    .catch(err => {
      console.error(err);
    });
});
