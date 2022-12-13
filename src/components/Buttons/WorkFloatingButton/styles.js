import { StyleSheet } from "react-native";

import { COLORS, FONTS, SIZES, SHADOWS } from "../../../utils/constants";

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
    backgroundColor: COLORS.themeColor,
    borderRadius: 100,
  },

  iconWhite: {
    color: COLORS.white,
  },

  iconMenu: {
    color: COLORS.white,
    marginRight: SIZES.base,
  },

  menuContainer: {
    backgroundColor: COLORS.overlayDivider,
    width: "50%",
    position: "relative",
    marginTop: -40,
    marginLeft: -30,
  },

  menuContainerMedium: {
    backgroundColor: COLORS.card,
    width: 250,
    position: "relative",
    marginTop: -40,
    marginLeft: -30,
    padding: SIZES.base,
  },

  menuText: {
    color: COLORS.white,
    fontFamily: FONTS.medium,
    fontSize: SIZES.heading5,
  },
});
