import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/auth_actions';
import { logout, isLoggedIn } from '../utils';
import WebAuth from './Auth';
// import sharedAuthFunctions from 'shared/components/Accounts';

class WebAccounts extends React.Component {

  localLogout() {
    this.props.history.push('auth');
    logout()
  }

  render() {
    if (!isLoggedIn()) {
      return <WebAuth />
    }
    return (
      <div>
        <button onClick={ () => {this.localLogout()}}>Logout</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { accounts, loading, error } = state.accounts;
	return { accounts };
};

export default connect(mapStateToProps, actions)(WebAccounts);




