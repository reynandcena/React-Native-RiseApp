import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES, SHADOWS } from "../../../utils/constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  titleContainer: {
    paddingHorizontal: 16,
    paddingVertical: 11,
  },

  title: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.heading4,
    color: COLORS.white,
  },
});
