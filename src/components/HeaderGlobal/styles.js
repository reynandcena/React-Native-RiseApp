import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES, SHADOWS } from "../../utils/constants";

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.overlayDivider,
    padding: SIZES.spacing,
    backgroundColor: COLORS.background,
  },

  headerInnerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  icon: {
    color: COLORS.grey,
  },

  spacer: {
    marginHorizontal: SIZES.base,
  },

  profile: {
    backgroundColor: "#07B99920",
    borderWidth: 1,
    borderColor: "#07B99940",
    borderRadius: 100,
    alignItems: "center",
    width: 36,
    height: 36,
    justifyContent: "center",
  },

  profileText: {
    color: COLORS.primary,
    fontFamily: FONTS.medium,
    fontSize: SIZES.heading5,
    lineHeight: 18,
  },
});
