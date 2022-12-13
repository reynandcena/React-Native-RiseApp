import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../utils/constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.paper,
  },

  topbar: {
    paddingHorizontal: SIZES.spacing,
    paddingVertical: SIZES.base,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.overlayDivider,
  },

  topbarlink: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    color: COLORS.grey,
  },

  linkText: {
    fontFamily: FONTS.medium,
    color: COLORS.white,
    marginLeft: SIZES.base,
  },

  avatarContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: SIZES.spacing,
  },

  avatar: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#07B99930",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },

  avatarText: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.heading3,
    textAlign: "center",
    color: COLORS.primary,
  },

  avatarName: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.heading4,
    color: COLORS.white,
    lineHeight: 28,
    marginTop: SIZES.base,
  },

  avatarEmail: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.fontSmall,
    lineHeight: 20,
    color: COLORS.grey,
  },

  formContainer: {
    padding: SIZES.spacing,
  },

  button: {
    backgroundColor: COLORS.overlayDivider,
    paddingVertical: 4,
    borderRadius: 4,
    marginTop: SIZES.fontSmall,
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

  buttonInActive: {
    fontFamily: FONTS.medium,
    color: COLORS.grey,
    textTransform: "uppercase",
  },

  spacer: {
    marginVertical: SIZES.base,
  },

  formContainer: {
    padding: SIZES.spacing,
  },
});
