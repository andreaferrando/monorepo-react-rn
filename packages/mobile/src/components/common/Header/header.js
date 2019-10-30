import React, { Component } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import ButtonIcon from 'commonComponents/Buttons/buttonIcon';
import styles from './styles/headerStylerStyle';

class Header extends Component {
  static defaultProps = {
    onPressRightButton: () => {},
    onPressLeftButton: () => {},
  };

  renderLeftButton() {
    const { leftButtonIcon, onPressLeftButton } = this.props;
    return (
      <ButtonIcon
        onPress={onPressLeftButton}
        imageSource={leftButtonIcon}
      />
    );
  }

  renderRightButton() {
    const { rightButtonIcon, onPressRightButton } = this.props;
    return (
      <ButtonIcon
        onPress={onPressRightButton}
        imageSource={rightButtonIcon}
      />
    );
  }

  render() {
    const { textStyle, viewStyle } = styles;
    const { backgroundColor, title } = this.props;
    return (
      <SafeAreaView style={{ backgroundColor }}>
        <View
          style={[viewStyle, { backgroundColor }]}
        >
          {this.renderLeftButton()}
          <Text style={textStyle}>{title}</Text>
          {this.renderRightButton()}
        </View>
      </SafeAreaView>
    );
  }
}

export default Header;
