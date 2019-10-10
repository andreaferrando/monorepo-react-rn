import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Modal from 'react-native-modalbox';
import R from 'res/R';

class ModalScreen extends Component {

  componentWillReceiveProps(newProps) {
    if (newProps.show) {
      this.refs.modal.open();
    }
  }

  render() {
    return (
      <Modal
      style={styles.modal}
      position={'center'}
      ref={'modal'}
      onClosed={this.props.onClosed}
      >
        <View style={{ flex: 1 }}>
          {this.props.showScreen}
        </View>
      </Modal>
    );
  }
}

const styles = {
  modal: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderRadius: 15,
    // backgroundColor: R.colors.gray.light90,
    backgroundColor: 'blue',
    position: 'relative',
    width: '90%',
    minHeight: '30%',
    height: '50%',
  }
};

export default ModalScreen;
