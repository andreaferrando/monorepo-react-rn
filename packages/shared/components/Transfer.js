import React, { Component } from 'react';
import shR from '../res/R';
import * as actionsAccounts from '../redux/actions/accounts_actions';
import * as actionsTransfer from '../redux/actions/transfer_actions';

export default function sharedTransferFunctions(OriginalComponent) {
  return class extends React.Component {
  
    state = { didSetComponent: false }

    originalComponentDidUpdate = async (originalProps) =>  {
      this.propsComponent = originalProps
      if (this.state.didSetComponent === false) {
        originalProps.accountsActions.fetchAccounts()
        this.setState({didSetComponent: true})
      }
      if (originalProps.transfer_completed == true) {
        this.propsComponent.transferActions.completedDisplayed()
      }
    }

    selectAccount = (account, isFrom) => {
      if (isFrom === true) {
        this.isAccountSelected(account, true) === true ? (this.propsComponent.transferActions.unselectAccountFrom(account)) : (this.propsComponent.transferActions.selectAccountFrom(account))
      } else {
        this.isAccountSelected(account, false) === true ? (this.propsComponent.transferActions.unselectAccountTo(account)) : (this.propsComponent.transferActions.selectAccountTo(account))
      }
    }

    isAccountSelected = (account, isFrom) => {
      return this.areAccountsEqual(isFrom ? (this.propsComponent.accountFrom) : (this.propsComponent.accountTo), account) === true 
    }

    areAccountsEqual = (account1, account2) => {
      if ((typeof(account1) === 'undefined') || (typeof(account2) === 'undefined')) { return false}
      return account1 === account2
    }

    setAmount = (amount) => {
      this.propsComponent.transferActions.setAmount(amount)
    }

    makeTransfer = () => {
      this.propsComponent.transferActions.makeTransfer(this.propsComponent.accountFrom,this.propsComponent.accountTo,this.propsComponent.amount)
    }

    didTransferSucceed = () => {
      if (this.propsComponent !== null) {
        return this.propsComponent.transfer_completed
      }
    }

    render() { 
      return (
        <OriginalComponent 
          {...this.props}
          updateSharedProps={this.originalComponentDidUpdate}
          selectAccount={this.selectAccount}
          setAmount={this.setAmount}
          isAccountSelected={this.isAccountSelected}
          makeTransferButtonTitle={shR.strings.transfer.makeTransfer}
          makeTransfer={this.makeTransfer}
          didTransferSucceed={this.didTransferSucceed}
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