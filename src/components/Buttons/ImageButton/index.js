import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

const ImageButton = ({ image, label, onpress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onpress}>
      <View style={styles.rowContainer}>
        <Image source={image} resizeMode="contain" style={styles.buttonImage} />
        <Text style={styles.buttonText}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ImageButton;
