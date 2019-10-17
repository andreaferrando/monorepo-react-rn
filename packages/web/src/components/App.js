import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { initApp, isLoggedIn } from '../utils';
import WebAuth from './Auth';
import WebAccounts from './Accounts';
import WebTransfer from './Transfer';
import WebRoute from '../utils/webroute';

class App extends Component {

  componentWillMount() {
    initApp()
	}

  render() {
    return (
      <Switch>
        <Route path={WebRoute.auth} component={WebAuth}/>
        <PrivateRoute exact path={WebRoute.home} component={WebAccounts}/>
        <PrivateRoute path={WebRoute.transfer} component={WebTransfer}/>
      </Switch>
    );
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    isLoggedIn() === true
      ? <Component {...props} />
      : <Redirect to={WebRoute.auth} />
  )} />
)

export default App;