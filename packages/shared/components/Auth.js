import React, { Component } from 'react';
import shR from '../res/R';
import * as actions from '../redux/actions/auth_actions';

export default function sharedAuthFunctions(OriginalComponent) {
  return class extends React.Component {

    state = { email:'andrea.ferrando@capco.com', password:'andrea.ferrando@capco.com' }

    setOriginalComponentProps = (newProps) => {
      this.originalComponentProps = newProps;
    }

    onEmailUpdate = (email) => {
      this.setState({ email });
    }

    onPasswordUpdate = (password) => {
      this.setState({ password });
    }

    onLoginClicked = () => {
      this.originalComponentProps.loginUser({email:this.state.email, password:this.state.password})
    }

    render() {
      return (
        <OriginalComponent 
          {...this.props}
          setProps={this.setOriginalComponentProps}
          onEmailUpdate={this.onEmailUpdate}
          onPasswordUpdate={this.onPasswordUpdate}
          onLoginClicked={this.onLoginClicked}
          email={this.state.email}
          password={this.state.password}
          emailPlaceholder={shR.strings.auth.email}
          passwordPlaceholder={shR.strings.auth.password}
          loginButtonTitle={shR.strings.auth.login}
        />
      );
    }
  }
}  


export const sharedMapStateToProps = state => {
  const { auth_error, auth_loading, user } = state.sharedAuth;
	return { auth_error, auth_loading, user };
};

export const sharedActions = actions