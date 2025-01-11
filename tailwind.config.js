// tailwind.config.js
const { nextui } = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(avatar|button|card|chip|dropdown|form|input|navbar|select|ripple|spinner|menu|divider|popover|listbox|scroll-shadow).js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "striped-red": `repeating-linear-gradient(
          90deg,
          #FBE843 [0.2]px,
          transparent 20px,
          transparent 20px
        )`,
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
