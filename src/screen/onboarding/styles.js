import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../utils/constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: "4.5%",
    paddingTop: "4.5%",
  },

  card: {
    backgroundColor: COLORS.paper,
    padding: SIZES.spacing,
    marginTop: "10%",
    borderRadius: 4,
  },

  logoContainer: {
    height: 80,
    alignItems: "center",
  },

  logo: {
    width: "100%",
    height: 40,
    margin: "3%",
  },

  ssoicon: {
    color: COLORS.grey,
  },

  ssocontainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  ssotext: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.fontBase,
    color: COLORS.grey,
    textTransform: "uppercase",
    marginLeft: SIZES.base,
  },

  dividerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: SIZES.spacing,
  },

  line: {
    width: "44%",
    height: 1,
    backgroundColor: COLORS.overlayDivider,
  },

  dividerText: {
    fontFamily: FONTS.medium,
    color: COLORS.white,
    textTransform: "uppercase",
    marginHorizontal: SIZES.base,
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

  footerLinkContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: SIZES.base,
  },

  footerLink: {
    fontFamily: FONTS.medium,
    color: COLORS.white,
    textTransform: "uppercase",
    fontSize: SIZES.fontSmall,
  },

  dot: {
    width: 3,
    height: 3,
    borderRadius: 100,
    backgroundColor: COLORS.white,
    marginHorizontal: SIZES.base,
  },

  footerContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 3,
    marginTop: "15%",
    marginBottom: "5%",
  },

  footerText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.fontSmall,
    lineHeight: 22,
    textTransform: "uppercase",
    color: COLORS.grey,
    textAlign: "center",
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

  marginVertical: {
    marginTop: SIZES.spacing,
  },

  center: { justifyContent: "center", alignItems: "center" },

  marginVerticalCenter: { marginVertical: SIZES.spacing, alignItems: "center" },

  defaultText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.fontBase,
    color: COLORS.grey,
    lineHeight: 22,
    textAlign: "center",
  },

  linkText: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.fontBase,
    color: COLORS.grey,
    lineHeight: 22,
    marginRight: 4,
    textAlign: "center",
    textTransform: "uppercase",
  },

  forgotPassword: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.fontSmall,
    color: COLORS.grey,
    alignSelf: "flex-end",
    textTransform: "uppercase",
    lineHeight: 36,
    marginTop: SIZES.base,
  },

  error: {
    color: COLORS.error,
    fontSize: SIZES.fontBase,
    fontFamily: FONTS.medium,
    lineHeight: 24,
    marginTop: SIZES.base,
  },

  headingText: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.heading4,
    color: COLORS.white,
    lineHeight: 23,
    marginBottom: SIZES.base,
  },

  subText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.fontBase,
    color: COLORS.grey,
    lineHeight: 22,
  },

  icon: {
    backgroundColor: "#07B99930",
    borderRadius: 100,
    padding: SIZES.spacing,
    color: COLORS.primary,
  },
});
