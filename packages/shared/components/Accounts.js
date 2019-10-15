import React, { Component } from 'react';
import shR from '../res/R';
import * as actionsAccounts from '../redux/actions/accounts_actions';
import * as actionsAuth from '../redux/actions/auth_actions';

export default function sharedAccountsFunctions(OriginalComponent) {
  return class extends React.Component {

    setOriginalComponentProps = (originalProps) => {
      this.originalComponentProps = originalProps;
    }

    logout = () => {
      this.originalComponentProps.authActions.logoutUser()
    }

    render() { 
      return (
        <OriginalComponent 
          {...this.props}
          setProps={this.setOriginalComponentProps}
          logout={this.logout}
          logoutButtonTitle={shR.strings.auth.logout}
        />
      );
    }
  }
}  

export const sharedMapStateToProps = state => {
  const { accounts, accounts_loading, accounts_error } = state.sharedAccounts;
  const { user, isAuthenticated, auth_error, auth_loading } = state.sharedAuth;
	return { user, isAuthenticated, auth_error, auth_loading, accounts, accounts_loading, accounts_error };
};

export const authActions = actionsAuth;
export const accountsActions = actionsAccounts;