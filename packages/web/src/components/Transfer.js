import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import sharedTransferFunctions, {sharedMapStateToProps, accountsActions, transferActions} from 'shared/components/Transfer';


class WebTransfer extends Component {

  componentDidMount(){
    this.props.initShared(this.props)
  }

  componentWillReceiveProps(newProps) {
    this.props.updateOriginalComponentProps(newProps)
  }

  renderList(isListOfFromAccounts) {
    if (!this.props.accounts) { return null; }
    return (
      <ul>
        {this.props.accounts.map((account) => {
          return <button key={account.number} 
          style={this.props.areAccountsEqual(isListOfFromAccounts ? (this.props.accountFrom) : (this.props.accountTo), account) === true ? ({"backgroundColor":"blue"}) : ({})} 
          onClick={ () => {
            isListOfFromAccounts ? (this.props.selectAccountFrom(account)) : (this.props.selectAccountTo(account)) }}>{account.number}</button>
        })}
      </ul>
    )
  }

  render() {
    if (this.props.needsToRenderTransferCompleted()) {
      this.props.transferCompletedDidRender()
      return <Redirect to={'/'} /> 
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




