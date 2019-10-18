import { isLoggedIn } from './utils';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import AccountsScreen from './screens/Accounts/AccountsScreen';
import AuthScreen from './screens/Auth/AuthScreen';
import TransferScreen from './screens/Transfer/TransferScreen';

const AppNavigator = createSwitchNavigator({
  // accounts: { screen: AccountsScreen },
  auth: { screen: AuthScreen },
  main: {
    navigationOptions: { tabBarVisible: false },
    screen: createStackNavigator({
      accounts: { screen: AccountsScreen },
      transfer: { screen: TransferScreen },
    },
    {
      initialRouteName: 'accounts',
      swipeEnabled: 'true',
      tabBarPosition: 'top',
      tabBarOptions: {
        showIcon: true,
        showLabel: true,
        activeTintColor: 'red',
        inactiveTintColor: 'gray'
      },
    })
  }
}, {
  initialRouteName: isLoggedIn() ? ('main') : ('auth'),
  lazy: true, //otherwise it loads each screen at the app opening
});

export default createAppContainer(AppNavigator);



export class Navigation {
  static auth = 'auth'
  static accounts = 'accounts'
  static transfer = 'transfer'
}