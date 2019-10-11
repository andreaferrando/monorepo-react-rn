import React from 'react'
import { View, Text } from 'react-native';
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';

import HomeScreen from './screens/Home/HomeScreen';
import AuthScreen from './screens/Auth/AuthScreen';

const AppNavigator = createSwitchNavigator({
  home: { screen: HomeScreen },
  auth: { screen: AuthScreen }
}, {
  initialRouteName: 'auth',
  lazy: true, //otherwise it loads each screen at the app opening
});

export default createAppContainer(AppNavigator);
