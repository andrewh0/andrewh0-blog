import { Theme } from "theme-ui";
import {
  red,
  redDark,
  indigo,
  indigoDark,
  gray,
  grayDark,
  green,
  greenDark,
  blue,
  blueDark,
  crimson,
  crimsonDark,
  orange,
  orangeDark,
  cyan,
  cyanDark,
  plum,
  plumDark,
} from "@radix-ui/colors";

// More presets available here: https://theme-ui.com/packages/presets

/*
Radix colors are described here:
https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale

Each color has 12 steps:
1  App background
2  Subtle background
3  UI element background
4  Hovered UI element background
5  Active / Selected UI element background
6  Subtle borders and separators
7  UI element border and focus rings
8  Hovered UI element border
9  Solid backgrounds
10 Hovered solid backgrounds
11 Low-contrast text
12 High-contrast text
*/

const colors = {
  ...cyan,
  ...gray,
  ...indigo,
  ...orange,
  ...plum,
  ...red,
  ...green,
};

const colorsDark = {
  ...cyanDark,
  ...grayDark,
  ...indigoDark,
  ...orangeDark,
  ...plumDark,
  ...redDark,
  ...greenDark,
};

const codeStyle = {
  fontFamily: "monospace",
  fontSize: 1,
  backgroundColor: "codeBackground",
  color: "codeText",
  padding: "0.05em 0.2em",
  borderRadius: "4px",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "codeBorderColor",
};

const theme: Theme = {
  config: {
    useColorSchemeMediaQuery: "system",
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    heading: "inherit",
    monospace:
      'SFMono-Regular, Menlo, Monaco, Consolas, "Ubuntu Mono", "Liberation Mono", "Courier New", Courier, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  colors: {
    text: gray.gray12,
    background: gray.gray1,
    primary: blue.blue11,
    secondary: blue.blue11,
    muted: gray.gray11,
    link: blue.blue11,
    codeText: crimson.crimson11,
    codeBackground: gray.gray3,
    codeBorderColor: gray.gray6,
    ...colors,
    modes: {
      dark: {
        text: grayDark.gray12,
        background: grayDark.gray1,
        primary: blueDark.blue11,
        secondary: blueDark.blue11,
        muted: grayDark.gray11,
        link: blueDark.blue11,
        codeText: crimsonDark.crimson11,
        codeBackground: grayDark.gray3,
        codeBorderColor: grayDark.gray6,
        ...colorsDark,
      },
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: [3, 4],
      mt: 5,
      mb: 4,
      letterSpacing: [0, "-0.03em"],
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: [2, 3],
      mt: 5,
      mb: 3,
      letterSpacing: [0, "-0.03em"],
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
      mt: 5,
      mb: 3,
      letterSpacing: "-0.03em",
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
      mt: 5,
      mb: 3,
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1,
      mt: 5,
      mb: 3,
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0,
      mt: 5,
      mb: 3,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      mb: 3,
      code: codeStyle,
    },
    a: {
      color: "link",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: codeStyle,
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
      mb: 3,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
      mb: 4,
      borderRadius: 16,
    },
    ul: {
      pl: "20px",
      ml: 0,
      mb: 3,
    },
    ol: {
      pl: "20px",
      mb: 3,
    },
    li: {
      mb: 2,
      code: codeStyle,
    },
    hr: {
      my: 5,
      mx: "auto",
      borderWidth: "1px",
      borderColor: gray.gray6,
      borderStyle: "solid",
      borderTop: "none",
      width: "33.333333%",
    },
  },
};

export default theme;
