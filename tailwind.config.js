const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      md: "441px",
      lg: "745px",
      xl: "991px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: { ...colors.neutral, 950: "#15181F" },
      blue: colors.blue,
    },
    extend: {
      fontFamily: {
        sans: ["Avenir Book", ...defaultTheme.fontFamily.sans],
        avenirBlack: ["Avenir Black", "sans-serif"],
        avenirBook: ["Avenir Book", "sans-serif"],
        avenirHeavy: ["Avenir Heavy", "sans-serif"],
      },
      boxShadow: {
        "md-top":
          "0 35px 60px -15px rgba(0, 0, 0, 0.4)",
      },
      boxShadow: {
        "md-bottom":
          "0 14px 36px 0 rgba(75, 80, 94, 0.05)",
      },
      colors: {
        blue: {
          100: "#3b90fd",
        },
        gray: {
          50: "#f9f9f9",
          100: "#b5dde8",
          200: "#e2e4e5",
          300: "#6e7a83",
          400: "#f6f7fb",
          450: "#323232",
          500: "#36424a",
        },
      },
    },
  },
  plugins: [],
};
