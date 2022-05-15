const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: { max: "639px" },
      xsm: { min: "440px" },
      xxs: { max: "439px" },
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
