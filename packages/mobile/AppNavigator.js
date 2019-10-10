import React from 'react'
import { View, Text } from 'react-native';
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';

import HomeScreen from './screens/Home/HomeScreen';

const AppNavigator = createSwitchNavigator({
  home: { screen: HomeScreen }
}, {
  initialRouteName: 'home',
  lazy: true, //otherwise it loads each screen at the app opening
});

export default createAppContainer(AppNavigator);
