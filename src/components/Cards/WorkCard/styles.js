import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../utils/constants";

export const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: COLORS.paper,
  },

  icon: {
    color: COLORS.grey,
    padding: 10,
  },

  spacer: {
    marginHorizontal: SIZES.base,
  },

  titleContainer: {
    paddingHorizontal: 16,
    paddingVertical: 11,
  },

  title: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.heading5,
    color: COLORS.primary,
  },

  viewContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  cardTitle: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.heading4,
    color: COLORS.white,
  },

  cardSubTitle: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.fontBase,
    color: COLORS.grey,
    lineHeight: 20.27,
  },

  items: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.fontBase,
    color: COLORS.grey,
    textTransform: "uppercase",
    lineHeight: 17.38,
    paddingVertical: 16,
  },

  menuContainer: {
    backgroundColor: COLORS.paper,
  },

  menuItem: {
    color: COLORS.white,
    fontFamily: FONTS.medium,
    fontSize: SIZES.fontBase,
  },

  menuItemDelete: {
    color: COLORS.error,
    fontFamily: FONTS.medium,
    fontSize: SIZES.fontBase,
  },
});
