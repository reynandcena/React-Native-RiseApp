import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../utils/constants";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.overlayDivider,
    paddingVertical: 4,
    borderRadius: 4,
    marginTop: SIZES.fontSmall,
  },

  buttonText: {
    fontFamily: FONTS.medium,
    color: COLORS.white,
    textTransform: "uppercase",
    marginLeft: SIZES.base,
  },

  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonImage: {
    width: 30,
    height: 30,
  },
});
