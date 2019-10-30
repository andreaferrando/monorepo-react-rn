import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import configureStore, { history } from './redux/store/configureStore';
import App from './containers/App';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App {...history} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') || document.createElement('div'), // for testing purposes
);
