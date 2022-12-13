import { StyleSheet, Platform } from "react-native";

import { COLORS, SIZES, FONTS, SHADOWS } from "../../../utils/constants";

export const styles = StyleSheet.create({
  buttonContainer: { position: "absolute", right: 20, bottom: 30 },
  fButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    borderRadius: 100,
    ...SHADOWS.dark,
  },

  iconButton: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    borderRadius: 100,
  },

  iconWhite: {
    color: COLORS.white,
  },

  iconMenu: {
    color: COLORS.primary,
    marginRight: SIZES.base,
  },

  menuContainer: {
    backgroundColor: COLORS.card,
    width: "50%",
    height: Platform.OS === "ios" ? 115 : 110,
    marginTop: Platform.OS === "ios" ? "-13%" : "-6%",
    marginLeft: "-9%",
    paddingLeft: Platform.OS === "ios" ? "8%" : "4%",
  },

  menuContainerMedium: {
    backgroundColor: COLORS.overlayDivider,
    width: 250,
    position: "relative",
    marginTop: -55,
    marginLeft: -30,
    padding: SIZES.base,
  },

  menuText: {
    color: COLORS.white,
    fontFamily: FONTS.medium,
    fontSize: SIZES.heading5,
    lineHeight: 20.27,
  },

  disabledText: {
    color: COLORS.grey,
    fontFamily: FONTS.regular,
    fontSize: SIZES.heading5,
    textTransform: "uppercase",
    lineHeight: 20.27,
  },
});
