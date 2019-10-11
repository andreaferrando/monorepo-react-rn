import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/auth_actions';

export default function sharedAuthFunctions(OriginalComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         email: '',
         password: ''
      };
    }

    onEmailUpdate = (email) => {
      this.setState({ email });
    }

    onPasswordUpdate = (password) => {
      this.setState({ password });
    }

    render() {
      //return original component with additional props
      return (
        <OriginalComponent 
          {...this.props}
          onEmailUpdate={this.onEmailUpdate}
          onPasswordUpdate={this.onPasswordUpdate}
          getLoginData={{email: this.state.email, password: this.state.password}}
        />
      );
    }
  }
}  