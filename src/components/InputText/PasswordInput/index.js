import React, { useState } from "react";
import { Text } from "react-native";
import { TextInput } from "react-native-paper";

import { COLORS, SIZES, FONTS } from "../../../utils/constants";

const PasswordInput = ({ val, onChangeText, label }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <TextInput
      value={val}
      onChangeText={onChangeText}
      secureTextEntry={!showPassword}
      label={
        <Text
          style={{
            fontFamily: FONTS.regular,
            textTransform: "uppercase",
            color: COLORS.grey,
          }}
        >
          {label}
        </Text>
      }
      selectionColor={COLORS.grey}
      underlineColor={COLORS.overlayDivider}
      activeUnderlineColor={COLORS.grey}
      backgroundColor={COLORS.paper}
      placeholderTextColor={COLORS.grey}
      textColor={COLORS.white}
      autoCapitalize="none"
      style={{
        height: 50,
        fontFamily: FONTS.medium,
        fontSize: SIZES.heading5,
        paddingHorizontal: 0,
      }}
      right={
        <TextInput.Icon
          icon={showPassword ? "eye" : "eye-off"}
          onPress={() => setShowPassword(!showPassword)}
          iconColor={COLORS.grey}
          style={{
            backgroundColor: COLORS.paper,
            width: 70,
            height: 50,
            borderRadius: 0,
          }}
        />
      }
    />
  );
};

export default PasswordInput;
