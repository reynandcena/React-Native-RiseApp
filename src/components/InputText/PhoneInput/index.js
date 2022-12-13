import React, { useState, useRef } from "react";
import PhoneInput from "react-native-phone-number-input";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { COLORS, SIZES, FONTS } from "../../../utils/constants";

const PhoneNumberInput = ({ val }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const phoneInput = useRef(null);
  return (
    <PhoneInput
      value={val}
      withDarkTheme={true}
      placeholder="PHONE NUMBER"
      containerStyle={{
        backgroundColor: COLORS.paper,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.overlayDivider,
        height: 50,
        width: "100%",
        marginBottom: SIZES.spacing,
        marginTop: SIZES.base,
      }}
      textContainerStyle={{
        backgroundColor: "transparent",
      }}
      textInputProps={{
        selectionColor: COLORS.grey,
        placeholderTextColor: COLORS.grey,
        fontFamily: FONTS.regular,
      }}
      textInputStyle={{
        backgroundColor: "transparent",
        color: COLORS.white,
        height: 42,
        fontFamily: FONTS.regular,
        fontSize: SIZES.heading5,
      }}
      codeTextStyle={{
        color: COLORS.white,
        fontFamily: FONTS.regular,
        fontSize: SIZES.fontBase,
      }}
      renderDropdownImage={
        <MaterialCommunityIcons
          name="menu-down"
          size={24}
          color={COLORS.grey}
        />
      }
      flagButtonStyle={{ color: COLORS.white }}
      ref={phoneInput}
      defaultValue={phoneNumber}
      onChangeFormattedText={(text) => {
        setPhoneNumber(text);
      }}
      defaultCode="AU"
      layout="second"
    />
  );
};

export default PhoneNumberInput;
