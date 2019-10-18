import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import sharedTransferFunctions, {sharedMapStateToProps, accountsActions, transferActions} from 'shared/components/Transfer';
import WebRoute from '../utils/webroute';

class WebTransfer extends Component {

  state = { }
  static getDerivedStateFromProps(nextProps, prevState){
    nextProps.updateSharedProps(nextProps)
    return prevState
 }

  renderList(isFromList) {
    if (!this.props.accounts) { return null }
    return (
      <ul>
        {this.props.accounts.map((account) => {
          return <button key={account.number} 
          style={this.props.isAccountSelected(account,isFromList) ? ({"backgroundColor":"blue"}) : ({})} 
          onClick={ () => {this.props.selectAccount(account, isFromList) }}>{account.number}</button>
        })}
      </ul>
    )
  }

  render() {
    if (this.props.didTransferSucceed()) {
      return <Redirect to={WebRoute.home} /> 
    }
    return (
      <div>
        <ul style={{"listStyleType":"none"}}>
          <li>FROM</li>
          <li>{this.renderList(true)}</li>
          <li>TO</li>
          <li>{this.renderList(false)}</li>
          <li>AMOUNT</li>
          <input type="number" name="amount" value={this.props.amount} onChange={(e) => {this.props.setAmount(e.target.value)}} />
          <li><button onClick={ () => {this.props.makeTransfer()}}>{this.props.makeTransferButtonTitle}</button></li>
        </ul>
      </div>
    );
  }

}

const sharedMapDispatchToProps = (dispatch) => {
  return ({
    accountsActions: bindActionCreators(accountsActions, dispatch),
    transferActions: bindActionCreators(transferActions, dispatch)
  });
}

export default sharedTransferFunctions(connect(sharedMapStateToProps, sharedMapDispatchToProps)(WebTransfer));




