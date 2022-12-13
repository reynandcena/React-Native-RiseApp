import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../utils/constants";

export const styles = StyleSheet.create({
  tableContainer: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.background,
    marginVertical: SIZES.spacing,
  },

  tableHeader: {
    backgroundColor: COLORS.overlayDivider,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomColor: COLORS.overlayDivider,
  },

  title: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.fontBase,
    color: COLORS.grey,
  },

  iconSort: {
    color: COLORS.grey,
  },

  rowTitle: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.fontBase,
    lineHeight: 20.27,
    color: COLORS.white,
  },

  iconLink: {
    color: COLORS.grey,
  },

  spacer: {
    marginHorizontal: SIZES.spacing,
  },
});
