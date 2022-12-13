import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES, SHADOWS } from "../../../utils/constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  modalContainer: {
    flex: 3,
    width: "100%",
    marginTop: 68,
    backgroundColor: COLORS.paper,
    borderTopWidth: 1,
    borderTopColor: COLORS.overlayDivider,
  },

  Divider: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.overlayDivider,
  },

  headerModal: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.overlayDivider,
    padding: SIZES.base,
  },

  headerModalText: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.heading5,
    color: COLORS.white,
    marginLeft: SIZES.base,
  },

  profileAccountContainer: {
    padding: SIZES.spacing,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.overlayDivider,
  },

  spacer: {
    marginVertical: SIZES.base,
    height: 1,
    width: "100%",
    backgroundColor: COLORS.overlayDivider,
  },

  flexRow: { flexDirection: "row", alignItems: "center" },

  profileAccountText: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.heading4,
    color: COLORS.white,
    lineHeight: 23.17,
  },

  profileAccountEmail: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.fontSmall,
    color: COLORS.grey,
    lineHeight: 20,
  },

  profile: {
    backgroundColor: "#07B99920",
    borderWidth: 1,
    borderColor: "#07B99940",
    borderRadius: 100,
    alignItems: "center",
    width: 36,
    height: 36,
  },

  profileText: {
    color: COLORS.primary,
    fontFamily: FONTS.medium,
    fontSize: SIZES.heading5,
    marginTop: -3,
  },

  menu: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIZES.spacing,
    paddingVertical: SIZES.base,
  },

  menuText: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.heading6,
    color: COLORS.white,
    textTransform: "uppercase",
    marginLeft: SIZES.spacing,
  },

  icon: {
    color: COLORS.grey,
  },
});
