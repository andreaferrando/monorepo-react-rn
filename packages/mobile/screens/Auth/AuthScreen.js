// import React, { Component } from 'react';
// import { View, Animated, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native';
// import { Input, Button, Divider } from 'react-native-elements';
// import SegmentedControlTab from 'react-native-segmented-control-tab';
// import Spinner from 'react-native-loading-spinner-overlay';
// import { connect } from 'react-redux';
// import ModalError from 'commonComponents/modalError';
// import R from 'res/R';
// import styles from './styles';
// import * as actions from 'appRedux/actions';
//
// class AuthScreen extends Component {
//   static navigationOptions = () => ({
//     tabBarVisible: false,
//     headerVisible: false
//   });
//
//   constructor() {
//     super();
//     this.state = { isLogin: true,
//                    email: 'admin@test.com',
//                    password: 'password',
//                    passwordConfirmation: '',
//                    hostName: '',
//                    guestPsw: '',
//                    selectedIndex: 0,
//                  };
//     this.updateIndex = this.updateIndex.bind(this);
//   }
//
//   componentWillReceiveProps(newProps) {
//     if (newProps.user) {
//       return this.props.navigation.navigate('home');
//     }
//   }
//
//   onBtnLoginPressed() {
//     const { email, password } = this.state;
//     this.props.loginUser({ email, password });
//   }
//
//   onBtnSignUpPress() {
//     const { email, password, passwordConfirmation } = this.state;
//     this.props.signUpUser({ email, password, passwordConfirmation });
//   }
//
//   onBtnSignUpFromLoginPress() {
//     this.setState({ isLogin: false });
//   }
//
//   onBtnLoginFromSignupPress() {
//     this.setState({ isLogin: true });
//   }
//
//   updateIndex(selectedIndex) {
//     this.setState({ ...this.state, selectedIndex });
//   }
//
//   renderLoading() {
//     return this.props.loading ?
//     <Spinner
//       visible={this.props.loading}
//       textContent={'Loading...'}
//       textStyle={styles.spinnerTextStyle}
//     />
//     : null;
//   }
//
//   renderForm() {
//     return this.state.isLogin === true ? this.renderLogin() : this.renderSignUp();
//   }
//
//   renderLogin() {
//     const placeholder1 = this.state.selectedIndex === 0 ? R.strings.auth.email : R.strings.auth.hostName;
//     const value1 = this.state.selectedIndex === 0 ? this.state.email : this.state.hostName;
//     const newStateVariable1 = this.state.selectedIndex === 0 ? 'email' : 'hostName';
//
//     const placeholder2 = this.state.selectedIndex === 0 ? R.strings.auth.password : R.strings.auth.code;
//     const value2 = this.state.selectedIndex === 0 ? this.state.password : this.state.guestPsw;
//     const newStateVariable2 = this.state.selectedIndex === 0 ? 'password' : 'guestPsw';
//     return (
//       <View>
//         <Input
//         placeholder={placeholder1}
//         errorStyle={{ color: 'red' }}
//         value={value1}
//         inputStyle={{ color: '#000' }}
//         onChangeText={text => this.setState({ [newStateVariable1]: text })}
//         />
//         <Input
//         placeholder={placeholder2}
//         errorStyle={{ color: 'red' }}
//         value={value2}
//         secureTextEntry
//         autoCorrect={false}
//         onChangeText={text => this.setState({ [newStateVariable2]: text })}
//         />
//         <Button
//           title={R.strings.auth.login}
//           style={{ marginTop: 20 }}
//           buttonStyle={{ backgroundColor: R.colors.main.default }}
//           onPress={() => { this.onBtnLoginPressed(); }}
//         />
//         <Button
//           title={R.strings.auth.signUpButton}
//           style={{ marginBottom: 10 }}
//           buttonStyle={{ backgroundColor: 'transparent' }}
//           titleStyle={{ color: R.colors.blue.default, fontSize: 10 }}
//           onPress={() => { this.onBtnSignUpFromLoginPress(); }}
//         />
//       </View>
//     );
//   }
//
//   renderSignUp() {
//     return (
//       <View>
//         <Input
//         placeholder={R.strings.auth.email}
//         errorStyle={{ color: 'red' }}
//         value={this.state.email}
//         inputStyle={{ color: '#000' }}
//         onChangeText={text => this.setState({ email: text })}
//         />
//         <Input
//         placeholder={R.strings.auth.password}
//         errorStyle={{ color: 'red' }}
//         value={this.state.password}
//         secureTextEntry
//         autoCorrect={false}
//         onChangeText={text => this.setState({ password: text })}
//         />
//         <Input
//         placeholder={R.strings.auth.confirmPassword}
//         errorStyle={{ color: 'red' }}
//         value={this.state.passwordConfirmation}
//         secureTextEntry
//         autoCorrect={false}
//         onChangeText={text => this.setState({ passwordConfirmation: text })}
//         />
//         <Button
//           title={R.strings.auth.signup}
//           style={{ marginTop: 20 }}
//           buttonStyle={{ backgroundColor: R.colors.main.default }}
//           onPress={() => { this.onBtnSignUpPress(); }}
//         />
//         <Button
//           title={R.strings.auth.loginButton}
//           style={{ marginBottom: 10 }}
//           buttonStyle={{ backgroundColor: 'transparent' }}
//           titleStyle={{ color: R.colors.blue.default, fontSize: 10 }}
//           onPress={() => { this.onBtnLoginFromSignupPress(); }}
//         />
//       </View>
//     );
//   }
//
//   renderSegmentControl() {
//     if (this.state.isLogin) {
//       return (
//         <View>
//           <SegmentedControlTab
//           tabStyle={styles.tabStyle}
//           tabTextStyle={styles.tabTextStyle}
//           activeTabStyle={styles.activeTabStyle}
//           activeTabTextStyle={styles.activeTabTextStyle}
//           values={[R.strings.auth.host, R.strings.auth.guest]}
//           selectedIndex={this.state.selectedIndex}
//           onTabPress={this.updateIndex}
//           />
//           <Divider style={{ backgroundColor: '#fff', marginHorizontal: 10, marginTop: 20 }} />
//         </View>
//       );
//     }
//     return null;
//   }
//
//   render() {
//     return (
//       <ImageBackground
//       key={1}
//       style={styles.container}
//       source={R.images.auth.backgroundImage}
//       >
//         <Animated.View style={styles.loginWrapper}>
//           <View style={styles.loginOpacity} />
//           {this.renderSegmentControl()}
//           <KeyboardAvoidingView
//             style={styles.wrapper}
//             behavior="padding"
//             keyboardVerticalOffset={
//               Platform.select({
//                ios: () => 10,
//                android: () => 10
//               })()
//             }
//           >
//           {this.renderForm()}
//           </KeyboardAvoidingView>
//         </Animated.View>
//         {this.renderLoading()}
//         <ModalError
//           show={this.props.error}
//           text={this.props.error}
//           onClosed={() => this.props.errorAuthDidDisplay()}
//         />
//       </ImageBackground>
//     );
//   }
// }
//
//
// const mapStateToProps = state => {
// 	const { error, loading, user } = state.auth;
// 	return { error, loading, user };
// };
//
// export default connect(mapStateToProps, actions)(AuthScreen);
