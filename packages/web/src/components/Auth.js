import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import sharedAuthFunctions, {sharedMapStateToProps, sharedActions} from 'shared/components/Auth';
import WebRoute from '../utils/webroute';

class WebAuth extends Component {

  state = { }
  static getDerivedStateFromProps(nextProps, prevState){
    nextProps.updateSharedProps(nextProps)
    return prevState
 }

  render() {
    if (this.props.loginSucceeded() === true) {
      return <Redirect to={WebRoute.home} /> 
    }
    return (
      <div>
        <form>
          <label>
            Email:
            <input type="email" name="email" value={this.props.email} onChange={(e) => {this.props.onEmailUpdate(e.target.value)}} />
          </label>
          <label>
            Password:
            <input type="password" name="password" value={this.props.password} onChange={(e) => {this.props.onPasswordUpdate(e.target.value)}} />
          </label>
        </form>
        <button onClick={ () => {this.props.onLoginClicked()}}>{this.props.loginButtonTitle}</button>
        
      </div>
    );
  }
}

export default sharedAuthFunctions(connect(sharedMapStateToProps, sharedActions)(WebAuth));
