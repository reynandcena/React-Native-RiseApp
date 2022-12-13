import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../utils/constants";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.overlayDivider,
    paddingVertical: 4,
    borderRadius: 4,
    marginTop: SIZES.fontSmall,
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

  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  buttonImage: {
    width: 30,
    height: 30,
  },
});
