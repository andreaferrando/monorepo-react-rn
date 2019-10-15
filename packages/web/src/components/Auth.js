import React, { Component } from 'react';
import { connect } from 'react-redux';
import sharedAuthFunctions, {sharedMapStateToProps, sharedActions} from 'shared/components/Auth';
import { isLoggedIn } from '../utils';
import WebAccounts from './Accounts';

class WebAuth extends Component {

  componentDidMount(){
    this.props.setProps(this.props)
  }

  render() {
    if (isLoggedIn()) {
      return <WebAccounts {...this.props}/>
    }
    return (
      <div>
        <form>
          <label>
            Email:
            <input type="text" name="email" value={this.props.email} onChange={(e) => {this.props.onEmailUpdate(e.target.value)}} />
          </label>
          <label>
            Password:
            <input type="text" name="password" value={this.props.password} onChange={(e) => {this.props.onPasswordUpdate(e.target.value)}} />
          </label>
        </form>
        <button onClick={ () => {this.props.onLoginClicked()}}>{this.props.loginButtonTitle}</button>
        
      </div>
    );
  }
}

export default sharedAuthFunctions(connect(sharedMapStateToProps, sharedActions)(WebAuth));
