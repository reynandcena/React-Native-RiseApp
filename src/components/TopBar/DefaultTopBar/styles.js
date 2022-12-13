import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../utils/constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },

  topBar: {
    padding: SIZES.spacing,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  icon: {
    color: COLORS.grey,
  },

  noIcon: {
    display: "none",
  },

  iconActive: {
    color: COLORS.primary,
  },

  topBarTitle: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.heading4,
    color: COLORS.white,
    marginLeft: SIZES.base,
  },

  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  spacer: {
    paddingHorizontal: 4,
  },

  actions: {
    backgroundColor: COLORS.overlayDivider,
    padding: SIZES.base,
    borderRadius: 4,
  },

  verticalDivider: {
    height: 24,
    width: 1,
    backgroundColor: COLORS.grey,
    marginHorizontal: 4,
  },

  topBarIconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.overlayDivider,
    borderRadius: 8,
  },

  modalContainer: {
    flex: 3,
    width: "100%",
    marginTop: 68,
    backgroundColor: COLORS.paper,
    borderTopWidth: 1,
    borderTopColor: COLORS.overlayDivider,
  },

  headerModal: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.overlayDivider,
    padding: SIZES.base,
    paddingHorizontal: SIZES.spacing,
  },

  headerModalText: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.heading5,
    color: COLORS.white,
  },

  listContainer: {
    backgroundColor: COLORS.card,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.overlayDivider,
  },

  title: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.fontBase,
    color: COLORS.white,
  },

  iconDot: {
    color: COLORS.primary,
  },

  listItemContainer: {
    padding: 16,
    backgroundColor: COLORS.background,
  },

  search: {
    elevation: 0,
    borderWidth: 1,
    borderColor: COLORS.overlayDivider,
    borderRadius: 100,
  },

  checkBoxLabel: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.fontBase,
    width: 235,
    color: COLORS.white,
  },

  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.overlayDivider,
    padding: SIZES.base,
  },

  switchLabel: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.fontBase,
    marginLeft: SIZES.base,
    color: COLORS.white,
  },

  selectedDateContainerStyle: {
    height: 30,
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    borderRadius: 4,
  },

  selectedDateStyle: {
    fontWeight: "bold",
    color: "white",
  },

  button: {
    backgroundColor: COLORS.overlayDivider,
    paddingVertical: 4,
    borderRadius: 4,
    marginTop: SIZES.fontSmall,
    width: "50%",
  },

  buttonprimaryactive: {
    backgroundColor: COLORS.primary,
    paddingVertical: 4,
    borderRadius: 4,
    marginTop: SIZES.fontSmall,
    width: "50%",
  },

  buttonactive: {
    fontFamily: FONTS.medium,
    color: COLORS.white,
    textTransform: "uppercase",
  },

  footer: {
    position: "absolute",
    bottom: 0,
    paddingHorizontal: SIZES.spacing,
    paddingBottom: SIZES.spacing,
    paddingTop: SIZES.base,
    borderTopColor: COLORS.overlayDivider,
    borderTopWidth: 1,
    width: "100%",
    justifyContent: "center",
  },
});
