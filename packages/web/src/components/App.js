import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { initApp, isLoggedIn } from '../utils';
import WebAuth from './Auth';
import WebAccounts from './Accounts';
import WebTransfer from './Transfer';

class App extends Component {

  componentWillMount() {
    initApp()
	}

  render() {
    return (
      <Switch>
        <Route path="/auth" component={WebAuth}/>
        <PrivateRoute exact path='/' component={WebAccounts}/>
        <PrivateRoute path='/transfer' component={WebTransfer}/>
      </Switch>
    );
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    isLoggedIn() === true
      ? <Component {...props} />
      : <Redirect to='/auth' />
  )} />
)

export default App;

/* <Router history={this.props.history}>
        <Route path="/" component={WebAccounts}>
          <Route path="/auth" component={WebAuth}/>
          <Route path="/transfer" component={WebTransfer}/>
        </Route>
     </Router> */

          /*<Router history={this.props.history}>
      <Switch>
        <Route path="/auth" component={WebAuth} />
          <Route path="/transfer" component={WebTransfer} />
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
        </Router>*/
       
          