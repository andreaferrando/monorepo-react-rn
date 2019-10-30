import React from 'react';
import { View, Image, Text } from 'react-native';
import { Input } from 'react-native-elements';
import Button from 'react-native-button';
import { withNavigation } from 'react-navigation';
import sharedAuthFunctions from 'shared/containers/Auth';
import shR from 'shared/res/R';
import images from 'shared/res/images';
import AppRoute from 'Navigation/AppRoute';
import styles from './styles/authStyle';
import { isLoggedIn } from '../../utils';

class Auth extends React.Component {
  componentDidUpdate() {
    const { navigation } = this.props;
    const { navigate } = navigation;
    isLoggedIn()
      .then((isLogged) => {
        if (isLogged) {
          navigate(AppRoute.home);
        }
      })
      .catch((e) => {
        console.error(e.message);
      });
  }

  render() {
    const {
      email,
      emailPlaceholder,
      onEmailUpdate,
      password,
      passwordPlaceholder,
      onPasswordUpdate,
      loginButtonTitle,
      onLoginClicked,
    } = this.props;
    return (
      <View
        style={styles.wrapperView}
      >
        <Image style={styles.logo} resizeMode="contain" source={images.main.logo} />
        <Text style={styles.header}>{shR.strings.auth.welcome}</Text>
        <View style={styles.formView}>
          <Input
            placeholder={emailPlaceholder}
            errorStyle={{ color: shR.colors.red }}
            value={email}
            inputStyle={{ color: shR.colors.black }}
            style={styles.input}
            onChangeText={text => onEmailUpdate(text)}
          />
          <Input
            placeholder={passwordPlaceholder}
            errorStyle={{ color: shR.colors.red }}
            value={password}
            inputStyle={{ color: shR.colors.black }}
            style={styles.input}
            secureTextEntry
            onChangeText={text => onPasswordUpdate(text)}
          />
          <Button
            containerStyle={styles.btnContainer}
            disabledContainerStyle={{backgroundColor: 'grey'}}
            style={styles.btn}
            onPress={() => {
              onLoginClicked();
            }}
          >{loginButtonTitle}</Button>
        </View>
      </View>
    );
  }
}

export default sharedAuthFunctions(withNavigation(Auth));
