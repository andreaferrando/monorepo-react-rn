import React, { Component } from "react";
import _ from "lodash";
import { View, Text } from "react-native";
import { AppLoading } from "expo";
import { connect } from "react-redux";
import * as actions from "appRedux/actions";
import styles from "./styles";

class HomeScreen extends Component {
  static navigationOptions = () => ({
    tabBarVisible: false
  });

  state = { didLoad: null, didMount: false };

  componentWillMount() {
    //TO UNCOMMENT
    // this.props.loadingApp((isFirstOpening, user) => {
    //   if (user) {
    //     // GlobalFunctions.setIsNotFirstTime();
    // this.props.getData();
    // this.setState({ didLoad: true });
    //   } else {
    //     this.props.navigation.navigate('auth');
    //   }
    // });
    this.props.getData();
    this.setState({ didLoad: true });
  }

  render() {
    if (_.isNull(this.state.didLoad)) {
      return <AppLoading />;
    }
    return (
      <View style={styles.text}>
        <Text>Redux Data: {this.props.data}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { data, error, loading } = state.homeData.data;
  return { data, error, loading };
};

export default connect(
  mapStateToProps,
  actions
)(HomeScreen);
