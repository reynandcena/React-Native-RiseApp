import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES, SHADOWS } from "../../utils/constants";

export const styles = StyleSheet.create({
  attachmentContainer: {
    marginTop: SIZES.spacing,
  },

  attachmentTitle: {
    fontFamily: FONTS.medium,
    color: COLORS.grey,
    textTransform: "uppercase",
  },

  attachmentButton: {
    backgroundColor: COLORS.overlayDivider,
    padding: SIZES.spacing,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },

  icon: {
    color: COLORS.grey,
  },

  subTitle: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.fontSmall,
    color: COLORS.grey,
    textAlign: "center",
    textTransform: "uppercase",
    marginTop: SIZES.base,
  },

  attachmentHeader: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.heading6,
    textTransform: "uppercase",
    color: COLORS.grey,
    lineHeight: 17.38,
  },
});
