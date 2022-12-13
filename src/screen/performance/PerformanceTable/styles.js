import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../utils/constants";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },

  tableContainer: {
    backgroundColor: "#fff",
    borderRadius: 4,
  },

  tableHeader: {
    backgroundColor: COLORS.grey900,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
  },

  title: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.heading5,
    marginRight: SIZES.base,
  },

  iconSort: {
    color: COLORS.primary,
    paddingTop: 20,
  },

  iconLink: {
    color: COLORS.themeColor,
  },

  rowTitle: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.heading5,
    color: COLORS.primary,
  },
});
