import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { currency } from './reducers/allreducer';

const allReducers = combineReducers({
  currency: currency,
});

const store = createStore(
  allReducers,
  window.devToolsExtension && window.devToolsExtension(),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
