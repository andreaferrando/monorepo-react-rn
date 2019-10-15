import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import sharedAccountsFunctions, {sharedMapStateToProps, accountsActions, authActions} from 'shared/components/Accounts';
import { isLoggedIn } from '../utils';
import WebAuth from './Auth';

class WebAccounts extends Component {

  componentDidMount(){
    this.props.setProps(this.props)
  }

  render() {
    if (!isLoggedIn()) {
      return <WebAuth />
    }
    return (
      <div>
        <button onClick={ () => {this.props.logout()}}>{this.props.logoutButtonTitle}</button>
      </div>
    );
  }

}

const sharedMapDispatchToProps = (dispatch) => {
  return ({
    accountsActions: bindActionCreators(accountsActions, dispatch),
    authActions: bindActionCreators(authActions, dispatch)
  });
}

export default sharedAccountsFunctions(connect(sharedMapStateToProps, sharedMapDispatchToProps)(WebAccounts));




