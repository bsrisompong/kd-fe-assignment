/** @type {import('tailwindcss').Config} */

import { primary } from "./styles/colors";

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: primary,
      },
    },
  },
  plugins: [],
};
