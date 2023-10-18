/** @type {import('tailwindcss').Config} */

// From https://github.com/tailwindlabs/tailwindcss-typography/blob/a86e6015694c3435ff6cef84f3dd61b81adf26e1/src/styles.js#L3C1-L18C1
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;

module.exports = {
  future: {
    // https://github.com/tailwindlabs/tailwindcss/pull/8394
    // This should be available in Tailwind 4.0
    hoverOnlyWhenSupported: true,
  },
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: {
        1: "var(--blue-1)",
        2: "var(--blue-2)",
        3: "var(--blue-3)",
        4: "var(--blue-4)",
        5: "var(--blue-5)",
        6: "var(--blue-6)",
        7: "var(--blue-7)",
        8: "var(--blue-8)",
        9: "var(--blue-9)",
        10: "var(--blue-10)",
        11: "var(--blue-11)",
        12: "var(--blue-12)",
      },
      crimson: {
        1: "var(--crimson-1)",
        2: "var(--crimson-2)",
        3: "var(--crimson-3)",
        4: "var(--crimson-4)",
        5: "var(--crimson-5)",
        6: "var(--crimson-6)",
        7: "var(--crimson-7)",
        8: "var(--crimson-8)",
        9: "var(--crimson-9)",
        10: "var(--crimson-10)",
        11: "var(--crimson-11)",
        12: "var(--crimson-12)",
      },
      cyan: {
        1: "var(--cyan-1)",
        2: "var(--cyan-2)",
        3: "var(--cyan-3)",
        4: "var(--cyan-4)",
        5: "var(--cyan-5)",
        6: "var(--cyan-6)",
        7: "var(--cyan-7)",
        8: "var(--cyan-8)",
        9: "var(--cyan-9)",
        10: "var(--cyan-10)",
        11: "var(--cyan-11)",
        12: "var(--cyan-12)",
      },
      gray: {
        1: "var(--gray-1)",
        2: "var(--gray-2)",
        3: "var(--gray-3)",
        4: "var(--gray-4)",
        5: "var(--gray-5)",
        6: "var(--gray-6)",
        7: "var(--gray-7)",
        8: "var(--gray-8)",
        9: "var(--gray-9)",
        10: "var(--gray-10)",
        11: "var(--gray-11)",
        12: "var(--gray-12)",
      },
      green: {
        1: "var(--green-1)",
        2: "var(--green-2)",
        3: "var(--green-3)",
        4: "var(--green-4)",
        5: "var(--green-5)",
        6: "var(--green-6)",
        7: "var(--green-7)",
        8: "var(--green-8)",
        9: "var(--green-9)",
        10: "var(--green-10)",
        11: "var(--green-11)",
        12: "var(--green-12)",
      },
      indigo: {
        1: "var(--indigo-1)",
        2: "var(--indigo-2)",
        3: "var(--indigo-3)",
        4: "var(--indigo-4)",
        5: "var(--indigo-5)",
        6: "var(--indigo-6)",
        7: "var(--indigo-7)",
        8: "var(--indigo-8)",
        9: "var(--indigo-9)",
        10: "var(--indigo-10)",
        11: "var(--indigo-11)",
        12: "var(--indigo-12)",
      },
      orange: {
        1: "var(--orange-1)",
        2: "var(--orange-2)",
        3: "var(--orange-3)",
        4: "var(--orange-4)",
        5: "var(--orange-5)",
        6: "var(--orange-6)",
        7: "var(--orange-7)",
        8: "var(--orange-8)",
        9: "var(--orange-9)",
        10: "var(--orange-10)",
        11: "var(--orange-11)",
        12: "var(--orange-12)",
      },
      plum: {
        1: "var(--plum-1)",
        2: "var(--plum-2)",
        3: "var(--plum-3)",
        4: "var(--plum-4)",
        5: "var(--plum-5)",
        6: "var(--plum-6)",
        7: "var(--plum-7)",
        8: "var(--plum-8)",
        9: "var(--plum-9)",
        10: "var(--plum-10)",
        11: "var(--plum-11)",
        12: "var(--plum-12)",
      },
      red: {
        1: "var(--red-1)",
        2: "var(--red-2)",
        3: "var(--red-3)",
        4: "var(--red-4)",
        5: "var(--red-5)",
        6: "var(--red-6)",
        7: "var(--red-7)",
        8: "var(--red-8)",
        9: "var(--red-9)",
        10: "var(--red-10)",
        11: "var(--red-11)",
        12: "var(--red-12)",
      },
      yellow: {
        1: "var(--yellow-1)",
        2: "var(--yellow-2)",
        3: "var(--yellow-3)",
        4: "var(--yellow-4)",
        5: "var(--yellow-5)",
        6: "var(--yellow-6)",
        7: "var(--yellow-7)",
        8: "var(--yellow-8)",
        9: "var(--yellow-9)",
        10: "var(--yellow-10)",
        11: "var(--yellow-11)",
        12: "var(--yellow-12)",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-stack-sans)"],
        mono: ["var(--font-stack-mono)"],
      },
      minHeight: {
        screen: ["100vh", "100dvh"],
      },
      maxHeight: {
        screen: ["100vh", "100dvh"],
      },
      height: {
        screen: ["100vh", "100dvh"],
      },
      typography: (theme) => ({
        custom: {
          css: {
            "--tw-prose-body": theme("colors.gray.12"),
            "--tw-prose-headings": theme("colors.gray.12"),
            "--tw-prose-lead": theme("colors.gray.12"),
            "--tw-prose-links": theme("colors.blue.11"),
            "--tw-prose-bold": theme("colors.gray.12"),
            "--tw-prose-counters": theme("colors.gray.12"),
            "--tw-prose-bullets": theme("colors.gray.12"),
            "--tw-prose-hr": theme("colors.gray.6"),
            "--tw-prose-quotes": theme("colors.gray.12"),
            "--tw-prose-quote-borders": theme("colors.gray.6"),
            "--tw-prose-captions": theme("colors.gray.11"),
            "--tw-prose-code": theme("colors.crimson.11"),
            "--tw-prose-pre-code": theme("colors.gray.12"),
            "--tw-prose-pre-bg": theme("colors.gray.3"),
            "--tw-prose-th-borders": theme("colors.gray.12"),
            "--tw-prose-td-borders": theme("colors.gray.6"),
          },
        },
        DEFAULT: {
          css: {
            code: {
              padding: `${rem(6)} ${rem(4)}`,
            },
            "code::before": {
              content: "",
            },
            "code::after": {
              content: "",
            },
            details: {
              marginTop: em(20, 16),
              marginBottom: em(20, 16),
            },
            blockquote: {
              border: "none",
            },
            "blockquote p:first-of-type::before": {
              content: "",
            },
            "blockquote p:last-of-type::after": {
              content: "",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
