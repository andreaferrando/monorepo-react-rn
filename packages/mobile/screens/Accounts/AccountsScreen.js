import React, { Component } from 'react';
import _ from 'lodash';
import { View, Button, FlatList, Text } from 'react-native';
import {Navigation} from '../../AppNavigator'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import sharedAccountsFunctions, {sharedMapStateToProps, accountsActions, authActions} from 'shared/components/Accounts';
import { isLoggedIn } from '../../utils';
import shR from 'shared/res/R';

class AccountsScreen extends React.Component {
  static navigationOptions = () => ({
    tabBarVisible: false
  });

  componentDidMount(){
    console.log("COMPONENT DI MOUNT")
    this.refreshData()
  } 

  refreshData = () => {
    console.log("REFRESH DATA")
    this.props.initShared(this.props)
  }

  state = { }
  static getDerivedStateFromProps(nextProps, prevState){
    nextProps.updateSharedProps(nextProps)
    return prevState
  }
  
  renderList = (item) => {
    const account = item.item
    return (
      <Text>{account.number} - amount: {account.amount}{account.currency}</Text>
    );
  }

  render() {
    isLoggedIn().then( (isLogged) => {
      if (!isLogged) {
        this.props.navigation.navigate(Navigation.auth);
      }
    })
    const dataSource = (typeof this.props.accounts !== 'undefined') ? (this.props.accounts) : ([])
    return (
      <View style={{ top: 80 }}>
        <FlatList
          contentContainerStyle={{ paddingBottom: 20 }}
          data={ dataSource.sort((a, b) => { return a.number < b.number }) }
          renderItem={this.renderList}
          keyExtractor={(account) => account.number}
        />
        <Button
            title={this.props.logoutButtonTitle}
            style={{ marginTop: 20 }}
            buttonStyle={{ backgroundColor: shR.colors.main.default }}
            onPress={() => {this.props.logout()}}
        />
        <Button
            title={this.props.makeTransferButtonTitle}
            style={{ marginTop: 20 }}
            buttonStyle={{ backgroundColor: shR.colors.main.default }}
            onPress={() => {this.props.navigation.navigate(Navigation.transfer, {refresh: this.refreshData})}}
        />
      </View>
    );
  }
}

const sharedMapDispatchToProps = (dispatch) => {
  return ({
    accountsActions: bindActionCreators(accountsActions, dispatch),
    authActions: bindActionCreators(authActions, dispatch)
  });
}

export default sharedAccountsFunctions(connect(sharedMapStateToProps, sharedMapDispatchToProps)(AccountsScreen));



