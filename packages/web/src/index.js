import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import configureStore, { history } from './redux/store';

import { Route, Redirect, Switch } from 'react-router-dom';
import WebAuth from './components/Auth';
import WebAccounts from './components/Accounts'

import { ConnectedRouter } from 'react-router-redux';
import PrivateRoute from './components/App';


const store = configureStore()


ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/auth" component={WebAuth} />
        <PrivateRoute path="/" component={WebAccounts} />
      </Switch>
    </ConnectedRouter>
  </Provider>

), document.getElementById('root'));
