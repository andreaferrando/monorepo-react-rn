import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../redux/actions/auth_actions';
import { isLoggedIn } from '../utils';

// import sharedAuthFunctions from 'shared/components/Auth';

class WebAccounts extends React.Component {

  render() {
    return (
      <div>
        text
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state.auth;
  const { accounts, loading, error } = state.accounts;
	return { user, accounts };
};

export default connect(mapStateToProps, actions)(WebAccounts);




