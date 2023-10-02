/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
