import React, { Component } from 'react';
import { connect } from 'react-redux';
import shR from '../res/R';
import * as actions from '../redux/actions/auth_actions';

export default function sharedAuthFunctions(OriginalComponent) {
  class SharedAuth extends Component {
        state = {
          email: '',
          password: '',
        };

        onEmailUpdate = (email) => {
          this.setState({ email });
        };

        onPasswordUpdate = (password) => {
          this.setState({ password });
        };

        onLoginClicked = () => {
          const { loginUser } = this.props;
          const { email, password } = this.state;
          loginUser({
            email,
            password,
          });
        };

        logout = () => {
          const { logoutUser } = this.props;
          logoutUser();
        };

        render() {
          const {
            user, isAuthenticated, authLoading, authError,
          } = this.props;
          const { email, password } = this.state;
          return (
            <OriginalComponent
              {...this.props}
              user={user}
              isAuthenticated={isAuthenticated}
              authLoading={authLoading}
              authError={authError}
              onEmailUpdate={this.onEmailUpdate}
              onPasswordUpdate={this.onPasswordUpdate}
              onLoginClicked={this.onLoginClicked}
              email={email}
              password={password}
              emailPlaceholder={shR.strings.auth.email}
              passwordPlaceholder={shR.strings.auth.password}
              loginButtonTitle={shR.strings.auth.login}
              logoutButtonTitle={shR.strings.auth.logout}
              logout={this.logout}
            />
          );
        }
  }
  const sharedAuthMapStateToProps = (state) => {
    const {
      authError, authLoading, user, isAuthenticated,
    } = state.auth;
    return {
      authError, authLoading, user, isAuthenticated,
    };
  };

  return connect(
    sharedAuthMapStateToProps,
    actions,
  )(SharedAuth);
}
