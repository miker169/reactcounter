/**
 * Created by mike on 02/10/2016.
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App'

const store = createStore(todoApp);

render(
  <Provider store = {store} >
    <App />
    </Provider>,
   document.getElementById('root')
);