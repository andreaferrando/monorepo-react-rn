// import React from 'react'
// import { View, Text } from 'react-native';
import { isLoggedIn } from './utils';
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';

import AccountsScreen from './screens/Accounts/AccountsScreen';
import AuthScreen from './screens/Auth/AuthScreen';

const AppNavigator = createSwitchNavigator({
  accounts: { screen: AccountsScreen },
  auth: { screen: AuthScreen }
}, {
  // initialRouteName: isLoggedIn() ? ('accounts') : ('auth'),
  initialRouteName: 'auth',
  lazy: true, //otherwise it loads each screen at the app opening
});

export default createAppContainer(AppNavigator);
