import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../utils/constants";

export const styles = StyleSheet.create({
  icon: {
    color: COLORS.grey,
  },

  spacer: {
    marginHorizontal: SIZES.base,
  },

  Divider: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.overlayDivider,
  },

  profileAccountContainer: {
    padding: SIZES.spacing,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.overlayDivider,
  },

  flexRow: { flexDirection: "row", alignItems: "center" },

  profileAccountText: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.heading4,
    color: COLORS.primary,
    lineHeight: 23.17,
  },

  profileAccountEmail: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.fontSmall,
    color: COLORS.primary,
    lineHeight: 20,
  },

  menu: {
    flexDirection: "row",
    paddingHorizontal: SIZES.spacing,
    paddingVertical: SIZES.base,
  },

  menuText: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.heading5,
    color: COLORS.white,
    marginLeft: SIZES.spacing,
  },

  subMenuText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.fontSmall,
    color: COLORS.grey,
    marginLeft: SIZES.spacing,
    lineHeight: 14,
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
    color: COLORS.themeColor,
    fontFamily: FONTS.medium,
    fontSize: SIZES.heading5,
    marginTop: -3,
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.overlayDivider,
    padding: SIZES.spacing,
  },

  headerInnerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  modalContainer: {
    flex: 3,
    width: "100%",
    marginTop: 68,
    backgroundColor: COLORS.paper,
    borderTopWidth: 1,
    borderTopColor: COLORS.overlayDivider,
  },
});
