import React from "react";
import { View, Dimensions, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const SCREEN_WIDTH = Dimensions.get("window").width;

const ButtonWithOpaqueBackground = ({ onPress, children }) => {
  return (
    <View style={{ margin: SCREEN_WIDTH * 0.025 }}>
      <View style={styles.btnOpaqueViewStyle} />
      <TouchableOpacity
        onPress={onPress}
        style={styles.buttonWithOpaqueBackground}
      >
        <Text style={styles.textStyle}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonWithOpaqueBackground;
