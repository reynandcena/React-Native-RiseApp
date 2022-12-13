import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../utils/constants";

export const styles = StyleSheet.create({
  formCard: {
    backgroundColor: COLORS.overlayDivider,
    borderRadius: 4,
    padding: SIZES.spacing,
    marginVertical: SIZES.base,
  },

  formTitle: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.heading4,
    color: COLORS.white,
    lineHeight: 28,
    marginLeft: SIZES.base,
  },

  formSubTitle: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.fontBase,
    color: COLORS.grey,
    width: "80%",
    textTransform: "uppercase",
  },

  buttonprimaryactive: {
    backgroundColor: COLORS.primary,
    paddingVertical: 4,
    borderRadius: 4,
    marginTop: SIZES.fontSmall,
  },

  buttonactive: {
    fontFamily: FONTS.medium,
    color: COLORS.white,
    textTransform: "uppercase",
  },

  icon: {
    color: COLORS.grey,
  },
});
