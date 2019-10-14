import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../redux/actions/auth_actions';
import sharedAuthFunctions from 'shared/components/Auth';
import { isLoggedIn } from '../utils';
import WebAccounts from './Accounts';

class WebAuth extends React.Component {

  render() {
    if (isLoggedIn()) {
      return <WebAccounts />
    }
    return (
      <div>
        <form>
          <label>
            Email:
            <input type="text" name="email" value={this.props.getLoginData.email} onChange={(e) => {this.props.onEmailUpdate(e.target.value)}} />
          </label>
          <label>
            Password:
            <input type="text" name="password" value={this.props.getLoginData.password} onChange={(e) => {this.props.onPasswordUpdate(e.target.value)}} />
          </label>
        </form>
        <button onClick={ () => {this.props.loginUser(this.props.getLoginData)}}>Login</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { error, loading, user } = state.auth;
	return { error, loading, user };
};

export default sharedAuthFunctions(connect(mapStateToProps, actions)(WebAuth));






