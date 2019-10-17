import React, { Component } from "react";
import { Text, View, SafeAreaView } from "react-native";
import ButtonIcon from "commonComponents/Buttons/buttonIcon";

const HEADER_HEIGHT = 44;

class Header extends Component {
  static defaultProps = {
    onPressRightButton: () => {},
    onPressLeftButton: () => {}
  };

  renderLeftButton() {
    return (
      <ButtonIcon
        onPress={this.props.onPressLeftButton}
        imageSource={this.props.leftButtonIcon}
      />
    );
  }

  renderRightButton() {
    return (
      <ButtonIcon
        onPress={this.props.onPressRightButton}
        imageSource={this.props.rightButtonIcon}
      />
    );
  }

  render() {
    const { textStyle, viewStyle } = styles;
    return (
      <SafeAreaView style={{ backgroundColor: this.props.backgroundColor }}>
        <View
          style={[viewStyle, { backgroundColor: this.props.backgroundColor }]}
        >
          {this.renderLeftButton()}
          <Text style={textStyle}>{this.props.title}</Text>
          {this.renderRightButton()}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = {
  viewStyle: {
    height: HEADER_HEIGHT,
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
    position: "relative",
    flexDirection: "row"
  },
  textStyle: {
    fontSize: 20,
    top: -5
  },
  buttonWrapperStyle: {
    backgroundColor: "transparent",
    width: 30,
    height: 30,
    marginHorizontal: 10,
    top: -5
  }
};

export default Header;
