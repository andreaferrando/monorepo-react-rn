import React, { Component } from 'react';
import _ from 'lodash';
import { View, Button } from 'react-native';
import { AppLoading } from 'expo';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import sharedAccountsFunctions, {sharedMapStateToProps, accountsActions, authActions} from 'shared/components/Accounts';
import { isLoggedIn } from '../../utils';
import shR from 'shared/res/R';

class AccountsScreen extends React.Component {
  static navigationOptions = () => ({
    tabBarVisible: false
  });

  componentDidMount() {
    this.props.setProps(this.props)
  }
  
  render() {
    isLoggedIn().then( (isLogged) => {
      if (!isLogged) {
        this.props.navigation.navigate('auth');
      }
    })
    return (
      <View style={{ top: 80 }}>
        <Button
            title={this.props.logoutButtonTitle}
            style={{ marginTop: 20 }}
            buttonStyle={{ backgroundColor: shR.colors.main.default }}
            onPress={() => {this.props.logout()}}
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



