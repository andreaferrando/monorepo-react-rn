import React, { Component } from 'react';
import shR from '../res/R';
import * as actionsAccounts from '../redux/actions/accounts_actions';
import * as actionsAuth from '../redux/actions/auth_actions';

export default function sharedAccountsFunctions(OriginalComponent) {
  return class extends React.Component {

    setOriginalComponentProps = (originalProps) => {
      this.originalComponentProps = originalProps;
      this.originalComponentProps.accountsActions.fetchAccounts()
    }

    logout = () => {
      this.originalComponentProps.authActions.logoutUser()
    }

    makeTransfer = () => {
      console.log("push to make transfer")
      // this.originalComponentProps.transferActions.setFromAccount(account)
    }

    render() { 
      return (
        <OriginalComponent 
          {...this.props}
          setProps={this.setOriginalComponentProps}
          logout={this.logout}
          logoutButtonTitle={shR.strings.auth.logout}
          makeTransferButtonTitle={shR.strings.accounts.makeTransfer}
          makeTransfer={this.makeTransfer}
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