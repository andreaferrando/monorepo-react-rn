import React, { Component } from 'react';
import shR from '../res/R';
import * as actionsAccounts from '../redux/actions/accounts_actions';
import * as actionsTransfer from '../redux/actions/transfer_actions';

export default function sharedTransferFunctions(OriginalComponent) {
  return class extends React.Component {
  
    state = { completedDidDisplay: false}

    setOriginalComponentProps = (props) => {
      this.updateOriginalComponentProps(props)
      this.originalComponentProps.accountsActions.fetchAccounts()
    }

    updateOriginalComponentProps = (originalProps) => {
      this.originalComponentProps = originalProps;
      if (this.originalComponentProps.transfer_completed == true) {
        this.setState({completedDidDisplay: true})
        this.originalComponentProps.transferActions.completedDisplayed()
      }
    }

    selectAccountFrom = (account) => {
      if (this.areAccountsEqual(this.originalComponentProps.accountFrom, account)) {
        this.originalComponentProps.transferActions.unselectAccountFrom(account)
      } else {
        this.originalComponentProps.transferActions.selectAccountFrom(account)
      }
    }

    selectAccountTo = (account) => {
      if (this.areAccountsEqual(this.originalComponentProps.accountTo, account)) {
        this.originalComponentProps.transferActions.unselectAccountTo(account)
      } else {
        this.originalComponentProps.transferActions.selectAccountTo(account)
      }
    }

    setAmount = (amount) => {
      this.originalComponentProps.transferActions.setAmount(amount)
    }

    areAccountsEqual = (account1, account2) => {
      if ((typeof(account1) === 'undefined') || (typeof(account2) === 'undefined')) { return false}
      return account1 === account2
    }

    makeTransfer = () => {
      this.originalComponentProps.transferActions.makeTransfer(this.originalComponentProps.accountFrom,this.originalComponentProps.accountTo,this.originalComponentProps.amount)
    }

    needsToRenderTransferCompleted = () => {
      return this.state.completedDidDisplay === true
    }

    transferCompletedDidRender = () => {
      this.setState({completedDidDisplay: false})
    }

    render() { 
      return (
        <OriginalComponent 
          {...this.props}
          initShared={this.setOriginalComponentProps}
          updateOriginalComponentProps={this.updateOriginalComponentProps}
          selectAccountFrom={this.selectAccountFrom}
          selectAccountTo={this.selectAccountTo}
          setAmount={this.setAmount}
          areAccountsEqual={this.areAccountsEqual}
          makeTransferButtonTitle={shR.strings.transfer.makeTransfer}
          makeTransfer={this.makeTransfer}
          needsToRenderTransferCompleted={this.needsToRenderTransferCompleted}
          transferCompletedDidRender={this.transferCompletedDidRender}
        />
      );
    }
  }
}  

export const sharedMapStateToProps = state => {
  const { accounts } = state.sharedAccounts;
  const { accountFrom, accountTo, amount, transfer_completed, transfer_error, transfer_loading } = state.sharedTransfer;
	return { accounts, accountFrom, accountTo, amount, transfer_completed, transfer_error, transfer_loading };
};

export const accountsActions = actionsAccounts;
export const transferActions = actionsTransfer;