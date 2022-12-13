import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../utils/constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  searchContainer: {
    borderRadius: 100,
    elevation: 1,
    color: COLORS.themeColor,
    marginBottom: SIZES.base,
  },

  widthFull: {
    width: "100%",
  },

  width80: {
    width: "78%",
  },

  searchInput: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.fontLarge,
    lineHeight: 23.17,
  },

  contactDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: SIZES.base,
  },

  contactName: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.fontBase,
    lineHeight: 22,
    color: COLORS.primary,
  },

  contactCompany: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.fontSmall,
    color: COLORS.grey,
    lineHeight: 20,
  },

  peopleContainer: {
    paddingHorizontal: SIZES.spacing,
    paddingBottom: 210,
  },
});
