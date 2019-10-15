import React from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { isLoggedIn } from '../../utils';
import sharedAuthFunctions, {sharedMapStateToProps, sharedActions} from 'shared/components/Auth';
import shR from 'shared/res/R';

class AuthScreen extends React.Component {

  componentDidMount() {
    this.props.setProps(this.props)
  }

  render() {
    isLoggedIn().then( (isLogged) => {
      if (isLogged) {
        this.props.navigation.navigate('accounts');
      }
    })
    return (
        <View style={{ flex:1, top:44}}>
            <Input
                placeholder={this.props.emailPlaceholder}
                errorStyle={{ color: shR.colors.red }}
                value={this.props.email}
                inputStyle={{ color: shR.colors.black }}
                onChangeText={text => this.props.onEmailUpdate(text)}
            />
            <Input
                placeholder={this.props.passwordPlaceholder}
                errorStyle={{ color: shR.colors.red }}
                value={this.props.password}
                inputStyle={{ color: shR.colors.black }}
                onChangeText={text => this.props.onPasswordUpdate(text)}
            />
            <Button
                title={this.props.loginButtonTitle}
                style={{ marginTop: 20 }}
                buttonStyle={{ backgroundColor: shR.colors.main.default }}
                onPress={() => {this.props.onLoginClicked()}}
            />
        </View>
    );
  }
}


export default sharedAuthFunctions(connect(sharedMapStateToProps, sharedActions)(AuthScreen));
