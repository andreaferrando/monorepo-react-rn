import React from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from 'appRedux/actions/auth_actions';
import sharedAuthFunctions from 'shared/components/Auth';
import R from 'shared/res/R';

class WebAuth extends React.Component {

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
                onPress={() => {this.props.loginUser(this.props.getLoginData)}}
            />
        </View>
    );
  }
}

const mapStateToProps = state => {
  const { error, loading, user } = state.authData;
  console.log("*****mapStateToProps******")
  console.log(state.authData)
	return { error, loading, user };
};

export default sharedAuthFunctions(connect(mapStateToProps, actions)(WebAuth));






