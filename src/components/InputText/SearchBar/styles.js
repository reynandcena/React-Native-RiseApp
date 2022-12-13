import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../utils/constants";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.spacing,
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "100%",
    backgroundColor: COLORS.overlayDivider,
    borderRadius: 100,
    alignItems: "center",
    paddingHorizontal: SIZES.spacing,
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "85%",
    backgroundColor: COLORS.overlayDivider,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingHorizontal: SIZES.spacing,
  },
  input: {
    marginLeft: SIZES.spacing,
    width: "85%",
    color: COLORS.white,
  },
  filledButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    backgroundColor: COLORS.paper,
    borderRadius: 4,
    width: "20%",
    alignSelf: "center",
  },

  filledButtonText: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.fontBase,
    lineHeight: 22,
    color: COLORS.grey,
  },
});
