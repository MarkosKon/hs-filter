import { mixed } from "styled-system";

const black = "#0C0F0A";
const white = "#fff";
const lightGray = "#e9eded";

const tuscan = "#E7D5A7";
const darkTuscan = "#dabe75";

const umber = "#58504A";
const raisinBlack = "#2C1320";
const lavender = "#D3C4E3";
const chestnut = "#DBB1BC";
const cyan = "#89DAFF";
const paradisePink = "#e44362";

const golden = "#77622a";

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
// Variants common
const common = {
  texts: {
    lineHeight: lineHeights.wider
  },
  buttons: {
    padding: "16px 28px",
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
  space: [0, 4, 8, 16, 32, 64, 128, 256],
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
    white,
    lightGray,
    tuscan,
    darkTuscan,
    umber,
    raisinBlack,
    lavender,
    chestnut,
    cyan,
    paradisePink,
    golden
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
      color: black,
      backgroundColor: "transparent"
    },
    black: {
      ...common.buttons,
      color: white,
      backgroundColor: raisinBlack
    },
    icon: {
      padding: "12px 16px",
      borderRadius: "3px"
    },
    paradisePink: {
      ...common.buttons,
      color: white,
      backgroundColor: paradisePink
    }
  },
  links: {
    backgroundLink: {
      ...common.links,
      backgroundColor: raisinBlack,
      color: white,
      lineHeight: lineHeights.wider,
      "&:hover": {
        color: raisinBlack
      }
    },
    paradisePink: {
      ...common.links,
      color: white,
      lineHeight: lineHeights.wider,
      "&:hover": {
        color: raisinBlack
      }
    }
  }
};
