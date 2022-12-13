import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

const FlatButton = ({
  label,
  onpress,
  disabled,
  buttonActive,
  buttonPrimary,
}) => {
  return (
    <TouchableOpacity
      style={buttonPrimary}
      disabled={disabled}
      onPress={onpress}
    >
      <View style={styles.rowContainer}>
        <Text style={buttonActive}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FlatButton;
