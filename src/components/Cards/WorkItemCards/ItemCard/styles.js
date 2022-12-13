import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../../utils/constants";

export const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: COLORS.paper,
    marginBottom: SIZES.spacing,
  },

  kanbanContainer: {
    padding: SIZES.spacing,
    width: 319,
  },

  kanbanColumnTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.overlayDivider,
    paddingBottom: SIZES.base,
    marginBottom: SIZES.spacing,
  },

  icon: {
    color: COLORS.grey,
  },

  kanbanTitle: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.heading6,
    textTransform: "uppercase",
  },

  vessel: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.heading4,
    color: COLORS.white,
  },

  profile: {
    display: "none",
  },

  profileAccepted: {
    backgroundColor: "#07B99920",
    borderWidth: 1,
    borderColor: "#07B99940",
    borderRadius: 100,
    alignItems: "center",
    width: 36,
    height: 36,
    marginRight: SIZES.base,
  },

  profileText: {
    color: COLORS.primary,
    fontFamily: FONTS.medium,
    fontSize: SIZES.heading5,
    marginTop: -3,
  },

  cardTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardTitleContainerNone: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    display: "none",
  },

  orderDetails: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.heading6,
    textTransform: "uppercase",
    lineHeight: 17.38,
    color: COLORS.grey,
  },

  statusContainer: {
    alignItems: "center",
    backgroundColor: COLORS.overlayDivider,
    padding: 6,
    borderRadius: 4,
    marginVertical: 16,
  },

  statusContainerAccepted: {
    alignItems: "center",
    backgroundColor: COLORS.primary,
    padding: 6,
    borderRadius: 4,
    marginVertical: 16,
  },

  statusContainerPending: {
    alignItems: "center",
    backgroundColor: "#E4A400",
    padding: 6,
    borderRadius: 4,
    marginVertical: 16,
  },

  statusContainerOverDue: {
    alignItems: "center",
    backgroundColor: COLORS.error,
    padding: 6,
    borderRadius: 4,
    marginVertical: 16,
  },

  status: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.heading6,
    color: COLORS.white,
    textTransform: "uppercase",
    lineHeight: 17.38,
  },

  statusAccepted: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.heading6,
    color: COLORS.white,
    textTransform: "uppercase",
    lineHeight: 17.38,
  },

  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  infoTitle: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.heading6,
    color: COLORS.grey,
    textTransform: "uppercase",
    lineHeight: 17.38,
  },

  infoDetail: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.fontSmall,
    color: COLORS.white,
    lineHeight: 20,
  },

  menuContainer: {
    backgroundColor: COLORS.paper,
  },

  menuItem: {
    color: COLORS.white,
    fontFamily: FONTS.medium,
    fontSize: SIZES.fontBase,
  },

  menuItemDelete: {
    color: COLORS.error,
    fontFamily: FONTS.medium,
    fontSize: SIZES.fontBase,
  },
});
