import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../utils/constants";

export const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  cardContainer: {
    backgroundColor: COLORS.paper,
    borderRadius: 4,
  },

  TopBar: {
    padding: SIZES.spacing,
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    color: COLORS.grey,
  },

  PageTitle: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.fontBase,
    color: COLORS.grey,
    lineHeight: 20,
  },

  ActiveContact: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.fontBase,
    color: COLORS.white,
    lineHeight: 20,
  },

  Container: {
    paddingHorizontal: SIZES.spacing,
    marginBottom: SIZES.spacing,
  },

  AvatarImage: {
    height: 54,
    width: 54,
    marginRight: SIZES.spacing,
  },

  HeaderContent: {
    flexDirection: "row",
    alignItems: "center",
  },

  HeaderName: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.heading4,
    color: COLORS.white,
    lineHeight: 22,
  },

  HeaderCompany: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.fontSmall,
    color: COLORS.grey,
    lineHeight: 20.27,
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
    color: COLORS.white,
  },

  columnHeader: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.heading6,
    textTransform: "uppercase",
    color: COLORS.grey,
    lineHeight: 30.38,
  },

  listItemContainer: {
    backgroundColor: COLORS.overlayDivider,
    borderRadius: 4,
  },

  tableHeader: {
    borderBottomColor: COLORS.grey900,
  },

  tableContainer: {
    borderRadius: 4,
  },

  iconSort: {
    color: COLORS.grey,
  },

  iconLink: {
    color: COLORS.primary,
  },

  rowTitle: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.fontBase,
    color: COLORS.white,
    lineHeight: 20.27,
  },

  modalContainer: {
    flex: 1,
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

  tabTitle: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.fontBase,
  },

  tabBar: {
    backgroundColor: COLORS.paper,
    borderBottomWidth: 1,
    borderColor: COLORS.overlayDivider,
    elevation: 0,
  },

  indicatorStyle: {
    backgroundColor: COLORS.primary,
    padding: 1.5,
    marginBottom: -2,
  },

  indicatorContainer: {
    backgroundColor: COLORS.paper,
  },
});
