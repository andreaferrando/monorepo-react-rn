import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from '../src/containers/Home';
import Auth from '../src/containers/Auth';
import AppRoute from './AppRoute';

const AppNavigator = createSwitchNavigator(
  {
    home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        tabBarVisible: false,
        title: 'Home',
        navigation,
      }),
    },
    auth: { screen: Auth },
  },
  {
    initialRouteName: AppRoute.home,
    lazy: true, // otherwise it loads each screen at the app opening
  },
);

export default createAppContainer(AppNavigator);



