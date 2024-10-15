/** @type {import('tailwindcss').Config} */

import * as colors from "./styles/colors";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: colors.blue,
        red: colors.red,
        lime: colors.lime,
        orange: colors.orange,
        yellow: colors.yellow,
        gray: colors.gray,
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  variants: {
    extend: {
      breakInside: ["responsive"],
    },
  },
};
