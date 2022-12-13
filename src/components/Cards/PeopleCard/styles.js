import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../utils/constants";

export const styles = StyleSheet.create({
  contactDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: SIZES.base,
  },

  contactName: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.fontBase,
    lineHeight: 22,
    color: COLORS.white,
  },

  contactCompany: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.fontSmall,
    color: COLORS.grey,
    lineHeight: 20,
  },
});
