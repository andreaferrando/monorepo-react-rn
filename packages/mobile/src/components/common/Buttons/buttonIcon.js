import React from "react";
import { TouchableOpacity, Image, View } from "react-native";
import styles from "./styles";

const ButtonIcon = ({ onPress, imageSource, tintColor, style }) => {
  return (
    <View style={[styles.buttonIconWrapperStyle, style]}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={imageSource}
          style={[styles.buttonIcon, { tintColor }]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ButtonIcon;
