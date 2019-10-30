import React, { Component } from 'react';
import _ from 'lodash';
import { View, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import Button from 'react-native-button';
import { compose } from 'recompose';
import sharedAuthFunctions from 'shared/containers/Auth';
import images from 'shared/res/images';
import { isLoggedIn } from '../../utils';
import AppRoute from 'Navigation/AppRoute';
import styles from './styles/homeStyle';

class Home extends Component {
  constructor(props) {
    super(props);
    this.checkIfLogged();
  }

  componentDidUpdate() {
    this.checkIfLogged();
  }

    checkIfLogged = () => {
      const { navigation } = this.props;
      const { navigate } = navigation;
      isLoggedIn()
        .then((isLogged) => {
          if (!isLogged) {
            navigate(AppRoute.auth);
          }
        })
        .catch((e) => {
          console.error(e.message);
        });
    };

    render() {
      const { logout, logoutButtonTitle } = this.props;
      return (
        <View style={styles.container}>
          <Image style={styles.logo} resizeMode="contain" source={images.main.logo} />
          <Button
            containerStyle={styles.btnContainer}
            disabledContainerStyle={{backgroundColor: 'grey'}}
            style={styles.btn}
            onPress={() => { logout(); }}
          >
            {logoutButtonTitle}
          </Button>
        </View>
      );
    }
}

export default compose(sharedAuthFunctions)(withNavigation(Home));
