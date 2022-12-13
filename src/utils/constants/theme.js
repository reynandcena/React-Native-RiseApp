export const COLORS = {
  grey: "#98989F",
  overlayDivider: "#2F3336",
  background: "#202528",
  paper: "#262B2E",
  disabled: "#F8F8F8",
  hover: "#F5F5F5",
  grey800: "#4A4F53",
  grey900: "#373B3F",
  white: "#FFFFFF",
  primary: "#07B999",
  primaryLight: "#C5E9E3",
  primaryDark: "#06947A",
  warning: "#E4A400",
  info: "#2384F2",
  cyan: "#1CCACD",
  purple: "#6352E9",
  error: "#EF5350",
  success: "#22DD60",
  pink: "#FD59F2",
};

export const SIZES = {
  heading1: 36,
  heading2: 30,
  heading3: 24,
  heading4: 16,
  heading5: 14,
  heading6: 12,
  fontBase: 14,
  fontLarge: 16,
  fontSmall: 12,
  spacing: 16,
  base: 8,
};

export const FONTS = {
  regular: "NotoSansRegular",
  medium: "NotoSansMedium",
  bold: "NotoSansBold",
  black: "NotoSansBlack",
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.darkCard,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.darkCard,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.darkCard,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
};
