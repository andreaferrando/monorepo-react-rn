import React, { Component } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import R from "res/R";

class AddItem extends Component {
  static defaultProps = {
    showPlus: true
  };

  renderBackground() {
    const { backgroundImage } = this.props;
    if (backgroundImage != null) {
      return <Image source={backgroundImage} style={styles.backgroundImage} />;
    }
    return <View />;
  }

  renderText() {
    const { tintColor, text } = this.props;
    if (text !== null) {
      return (
        <Text style={[styles.textStyle, { color: tintColor }]}>{text}</Text>
      );
    }
    return null;
  }

  renderPlus() {
    const { tintColor, showPlus } = this.props;
    if (showPlus === true) {
      return (
        <View style={styles.viewWrapper}>
          {this.renderText()}
          <View style={{ height: 10 }} />
          <Image
            source={R.icons.plus}
            style={[styles.buttonIcon, { tintColor }]}
          />
        </View>
      );
    }
    return null;
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[styles.viewWrapper, this.props.viewWrapperSize]}
      >
        {this.renderBackground()}
        {this.renderPlus()}
      </TouchableOpacity>
    );
  }
}

const styles = {
  viewWrapper: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  },
  buttonIcon: {
    backgroundColor: "transparent"
  },
  textStyle: {
    fontSize: 17
  },
  backgroundImage: {
    width: "100%",
    height: "100%"
  }
};

export default AddItem;
