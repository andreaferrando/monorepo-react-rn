import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom'
import sharedAccountsFunctions, {sharedMapStateToProps, accountsActions, authActions} from 'shared/components/Accounts';
import { isLoggedIn } from '../utils';
import WebRoute from '../utils/webroute';

class WebAccounts extends Component {

  state = { }
  static getDerivedStateFromProps(nextProps, prevState){
    nextProps.updateSharedProps(nextProps)
    return prevState
 }

  renderList() {
    if (!this.props.accounts) { return null; }
    return (
      <ul>
        {this.props.accounts.map(function(account) {
          return <li key={account.number}>{account.number}</li>
        })}
      </ul>
    )
  }

  render() {
    if (!isLoggedIn()) {
      return <Redirect to={WebRoute.auth} /> 
    }
    return (
      <div>
        <ul style={{"listStyleType":"none"}}>
          <li>{this.renderList()}</li>
          <li><Link to={WebRoute.transfer}>{this.props.makeTransferButtonTitle}</Link></li>
          <li><button onClick={ () => {this.props.logout()}}>{this.props.logoutButtonTitle}</button></li>
        </ul>
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

// export default sharedAccountsFunctions(withRouter(connect(sharedMapStateToProps, sharedMapDispatchToProps)(WebAccounts)));

export default sharedAccountsFunctions(connect(sharedMapStateToProps, sharedMapDispatchToProps)(WebAccounts));




