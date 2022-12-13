import React from "react";
import { TextInput } from "react-native-paper";
import { Text } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../utils/constants";

const DefaultInput = ({
  val,
  onChangeText,
  label,
  defaultvalue,
  isDisabled,
  rightIcon,
  textcolor,
  background,
}) => {
  return (
    <TextInput
      value={val}
      disabled={isDisabled}
      defaultValue={defaultvalue}
      onChangeText={onChangeText}
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
      backgroundColor={background}
      placeholderTextColor={COLORS.grey}
      textColor={textcolor}
      autoCapitalize="none"
      style={{
        height: 50,
        fontFamily: FONTS.medium,
        fontSize: SIZES.heading5,
        paddingHorizontal: 0,
      }}
      right={rightIcon}
    />
  );
};

export default DefaultInput;
