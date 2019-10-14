import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { initApp, isLoggedIn } from '../utils';
import WebAuth from './Auth';
import WebAccounts from './Accounts';


const PrivateRoute = ({ component: WebAccounts, ...rest }) => {

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn() ? (
          <WebAccounts {...props} />
        ) : (
          <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute



{/* <div>
        {isLoggedIn() ? (
          <WebAccounts {...this.props}/>
        ) : (
          <WebAuth {...this.props}/>
        )}  
      </div> */}

// export default App;




