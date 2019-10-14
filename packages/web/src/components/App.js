import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { initApp, isLoggedIn } from '../utils';
import WebAuth from './Auth';
import WebAccounts from './Accounts';

class App extends Component {

  componentWillMount() {
    initApp()
	}
  
  render() {
    return (
      <Switch>
        <Route path="/auth" component={WebAuth} />
        <Route
          render={props =>
            isLoggedIn() ? (
              <WebAccounts {...props} />
            ) : (
              <Redirect to={{ pathname: '/auth' }} />
            )
          }
        />
      </Switch>
    );
  }
}

export default App;
