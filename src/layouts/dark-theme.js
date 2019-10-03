import { mixed } from "styled-system";

const black = "#000";
const almostBlack = "#212121";
const raisinBlack = "#2C1320";
const darkGray = "#303030";
const gray = "#3C3C3C";
const darkRedishGray = "#4e4747";
const redishGray = "#867f7f";
const lightGray = "#cec7c5";
const darkTuscan = "#dabe75";
const tuscan = "#E7D5A7";
const golden = "#77622a";
const purple = "#9c27b0";
const paradisePink = "#d23b58";
const white = "#fff";

const lineHeights = {
  normal: 1,
  wide: 1.2,
  wider: 1.7
};
const fonts = {
  playfair: "Playfair Display,  serif",
  opensans: "Open Sans, sans-serif"
};
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 82];
const fontWeights = {
  normal: 400,
  semi: 500,
  bold: 700
};
const space = [0, 4, 8, 16, 32, 64, 128, 256];
// Variants common
const common = {
  texts: {
    lineHeight: lineHeights.wider
  },
  buttons: {
    padding: "12px 24px",
    borderRadius: "3px",
    fontFamily: fonts.opensans
  },
  links: {
    fontSize: fontSizes[2],
    fontWeight: fontWeights.semi,
    lineHeight: lineHeights.normal
  }
};
export default {
  breakpoints: ["40em", "52em", "64em"],
  space,
  shadows: {
    small: "0 0 4px rgba(0, 0, 0, .125)",
    normal: "0 0 24px rgba(0, 0, 0, .125)",
    large: "0 0 24px rgba(0, 0, 0, .175)",
    hard: "0 0 16px rgba(0, 0, 0, .25)",
    extreme: "0 0 16px rgba(0, 0, 0, .35)"
  },
  borders: {
    green: `2px solid ${black}`
  },
  fontSizes,
  fontWeights,
  lineHeights,
  fonts,
  colors: {
    black,
    almostBlack,
    raisinBlack,
    darkGray,
    darkRedishGray,
    gray,
    redishGray,
    lightGray,
    darkTuscan,
    tuscan,
    golden,
    purple,
    paradisePink,
    white
  },
  // Variants
  headings: {
    h1: mixed({
      lineHeight: lineHeights.wide,
      fontSize: [6, 8],
      fontWeight: fontWeights.bold
    }),
    h2: {
      lineHeight: lineHeights.normal,
      fontSize: fontSizes[5]
    },
    h3: {
      lineHeight: lineHeights.wide,
      fontFamily: fonts.opensans,
      fontSize: fontSizes[3]
    }
  },
  texts: {
    normal: {
      ...common.texts
    },
    lead: {
      ...common.texts,
      fontSize: fontSizes[3],
      fontWeight: fontWeights.semi
    },
    wide: {
      ...common.texts,
      fontSize: fontSizes[4]
    }
  },
  buttons: {
    transparent: {
      ...common.buttons,
      color: white,
      backgroundColor: "transparent"
    },
    icon: {
      padding: "12px 16px",
      borderRadius: "3px"
    },
    paradisePink: {
      ...common.buttons,
      color: white,
      backgroundColor: paradisePink
    },
    purple: {
      ...common.buttons,
      color: white,
      backgroundColor: "#d2008a"
    }
  },
  links: {
    pink: {
      backgroundColor: tuscan,
      color: black,
      lineHeight: lineHeights.wider,
      padding: `${space[1]}px ${space[2]}px`,
      borderBottom: `3px solid ${raisinBlack}`,
      borderRadius: space[1],
      "&:hover": {
        color: raisinBlack
      }
    },
    paradisePink: {
      ...common.links,
      color: white,
      lineHeight: lineHeights.wider,
      "&:hover": {
        color: paradisePink
      }
    }
  }
};
