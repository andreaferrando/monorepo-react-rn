import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { initApp, isLoggedIn } from '../utils';
import Auth from './Auth';
import Home from './Home';
import WebRoute from '../utils/webroute';

class App extends Component {
  constructor(props) {
    super(props);
    initApp();
  }

  render() {
    return (
      <Switch>
        <Route path={WebRoute.auth} component={Auth} />
        <PrivateRoute exact path={WebRoute.home} component={Home} />
      </Switch>
    );
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isLoggedIn() === true
        ? <Component {...props} />
        : <Redirect to={WebRoute.auth} />
    )}
  />
);

export default App;
