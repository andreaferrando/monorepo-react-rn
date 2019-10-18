import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { View, Text, FlatList } from 'react-native';
import { Input, Button } from 'react-native-elements';
import {Navigation} from '../../AppNavigator'
import sharedTransferFunctions, {sharedMapStateToProps, accountsActions, transferActions} from 'shared/components/Transfer';
import shR from 'shared/res/R';

class TransferScreen extends Component {

  state = { }
  static getDerivedStateFromProps(nextProps, prevState){
    nextProps.updateSharedProps(nextProps)
    return prevState
 }

  renderList = (account, isFromList) => {
    return (
      <Button
          title={account.number + "- amount: " + account.amount + account.currency}
          buttonStyle= {this.props.isAccountSelected(account,isFromList) ? ({"backgroundColor":shR.colors.main.default}) : ({"backgroundColor":shR.colors.gray.light70})} 
          onPress={() => {this.props.selectAccount(account, isFromList)}}
      />
    )
  }

  render() {
    if (this.props.didTransferSucceed()) {
      
      this.props.navigation.state.params.refresh()
      this.props.navigation.navigate(Navigation.accounts)
    }
    const dataSource = (typeof this.props.accounts !== 'undefined') ? (this.props.accounts) : ([])
    return (
      <View>
        <Text>FROM</Text> 
        <FlatList
          contentContainerStyle={{ paddingBottom: 20 }}
          data={ dataSource.sort((a, b) => { return a.number < b.number }) }
          renderItem={(item) => this.renderList(item.item, true)}
          keyExtractor={(account) => account.number}
        />
        <Text>TO</Text>
        <FlatList
          contentContainerStyle={{ paddingBottom: 20 }}
          data={ dataSource.sort((a, b) => { return a.number < b.number }) }
          renderItem={(item) => this.renderList(item.item, false)}
          keyExtractor={(account) => account.number}
        />
        <Input
            placeholder='Amount'
            errorStyle={{ color: shR.colors.red }}
            value={this.props.amount}
            inputStyle={{ color: shR.colors.black }}
            onChangeText={newAmount => this.props.setAmount(newAmount)}
        />
        <Button
            title={this.props.makeTransferButtonTitle}
            style={{ marginTop: 20 }}
            buttonStyle={{ backgroundColor: shR.colors.main.default }}
            onPress={() => {this.props.makeTransfer()}}
        />
      </View>
    )
  }
}

const sharedMapDispatchToProps = (dispatch) => {
  return ({
    accountsActions: bindActionCreators(accountsActions, dispatch),
    transferActions: bindActionCreators(transferActions, dispatch)
  });
}

export default sharedTransferFunctions(connect(sharedMapStateToProps, sharedMapDispatchToProps)(TransferScreen));




