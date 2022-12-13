import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../utils/constants";

export const styles = StyleSheet.create({
  container: {
    padding: SIZES.spacing,
  },

  link: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.heading5,
    color: COLORS.white,
  },

  spacer: {
    marginVertical: SIZES.base,
  },

  listContainer: {
    backgroundColor: COLORS.paper,
    padding: 0,
  },

  title: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.fontBase,
    marginLeft: -15,
  },

  innerText: {
    fontFamily: FONTS.regular,
    color: COLORS.grey,
  },

  searchContainer: {
    borderRadius: 100,
    elevation: 1,
    color: COLORS.themeColor,
    marginBottom: SIZES.base,
    height: 42,
    width: "100%",
  },

  searchInput: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.fontBase,
    lineHeight: 19.07,
  },

  listContent: {
    paddingHorizontal: 42,
  },

  listText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.fontSmall,
    color: COLORS.grey,
    lineHeight: 20,
  },

  listTextWhite: {
    backgroundColor: COLORS.overlayDivider,
    padding: 4,
    borderRadius: 4,
    color: COLORS.primary,
    fontFamily: FONTS.regular,
    fontSize: SIZES.fontSmall,
    lineHeight: 19.07,
  },

  spacerVertical: {
    marginVertical: 2,
  },

  spacerHorizontal: {
    marginHorizontal: 2,
  },
});
