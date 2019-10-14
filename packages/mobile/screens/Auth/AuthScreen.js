import React from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from 'appRedux/actions/auth_actions';
import sharedAuthFunctions from 'shared/components/Auth';
import R from 'shared/res/R';
import { isLoggedIn } from '../../utils';

class AuthScreen extends React.Component {

  componentWillMount() {
    isLoggedIn((isLogged) => {
      if (isLogged) {
        this.props.navigation.navigate('accounts');
      }
    });
  }

  render() {
    return (
        <View style={{ flex:1, top:44}}>
            <Input
                placeholder={R.strings.auth.email}
                errorStyle={{ color: R.colors.red }}
                value={this.props.getLoginData.email}
                inputStyle={{ color: R.colors.black }}
                onChangeText={text => this.props.onEmailUpdate(text)}
            />
            <Input
                placeholder={R.strings.auth.password}
                errorStyle={{ color: R.colors.red }}
                value={this.props.getLoginData.password}
                inputStyle={{ color: R.colors.black }}
                onChangeText={text => this.props.onPasswordUpdate(text)}
            />
            <Button
                title={R.strings.auth.login}
                style={{ marginTop: 20 }}
                buttonStyle={{ backgroundColor: R.colors.main.default }}
                onPress={() => {this.props.loginUser({email:this.props.getLoginData.email, password:this.props.getLoginData.password})}}
            />
        </View>
    );
  }
}


const mapStateToProps = state => {
  const { error, loading, user } = state.auth;
  // console.log("*****mapStateToProps******")
  // console.log(state.auth)
	return { error, loading, user };
};

export default sharedAuthFunctions(connect(mapStateToProps, actions)(AuthScreen));






