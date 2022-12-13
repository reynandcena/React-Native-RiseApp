import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../utils/constants";

export const styles = StyleSheet.create({
  kanbanContainer: {
    paddingHorizontal: SIZES.spacing,
    width: 320,
  },

  kanbanColumnTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.overlayDivider,
    marginBottom: SIZES.spacing,
  },

  kanbanTitle: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.heading6,
    textTransform: "uppercase",
    color: COLORS.white,
  },
});
