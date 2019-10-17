import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button, Divider } from "react-native-elements";
import Modal from "react-native-modalbox";
import R from "res/R";

class ModalError extends Component {
  componentWillReceiveProps(newProps) {
    if (newProps.show) {
      this.refs.modal.open();
    }
  }

  render() {
    return (
      <Modal
        style={[styles.modal, styles.modal3]}
        position={"center"}
        ref={"modal"}
        onClosed={this.props.onClosed}
      >
        <Text style={styles.modalText}>{this.props.text}</Text>
        <View
          style={{
            width: "100%",
            flex: 1,
            justifyContent: "flex-end",
            height: 30
          }}
        >
          <Divider style={{ backgroundColor: R.colors.gray.light70 }} />
          <Button
            onPress={() => this.refs.modal.close()}
            buttonStyle={{ backgroundColor: "transparent" }}
            containerStyle={{ backgroundColor: "transparent" }}
            titleStyle={{ color: R.colors.blue.default }}
            title="Cancel"
          />
        </View>
      </Modal>
    );
  }
}

const styles = {
  modal: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: R.colors.gray.light90
  },

  modal3: {
    width: 250,
    height: 125
  },

  modalText: {
    flex: 1,
    justifyContent: "flex-start",
    color: "black",
    fontSize: 17,
    marginTop: "7%",
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: "center"
  }
};

export default ModalError;
