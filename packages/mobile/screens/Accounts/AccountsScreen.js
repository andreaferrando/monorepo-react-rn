import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';
import * as actions from 'appRedux/actions/accounts_actions';
import { isLoggedIn } from '../../utils';
// import R from 'appRes/R';
// import styles from './styles';

class AccountsScreen extends React.Component {
  static navigationOptions = () => ({
    tabBarVisible: false
  });

  state = {  };

  componentWillMount() {
    if (!isLoggedIn()) {
      this.props.navigation.navigate('auth');
    }
  }

  render() {
    if (_.isNull(this.state.didLoad)) {
      return <AppLoading />;
    }
    return (
      <View style={{ top: 80 }}>
        <Text>ReduxData: {this.props.data}</Text>
      </View>
    );
  }
}


const mapStateToProps = state => {
  const { accounts, error, loading } = state.accounts
  return { accounts, error, loading }
};

export default connect(mapStateToProps, actions)(AccountsScreen);
