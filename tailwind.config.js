const { se } = require("date-fns/locale");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Generated range for base color ##4F4039
        primary: "#4F4039",
        // Generated range for base color #C3DBDD
        secondary: "#C3DBDD",
        light: "#4F4039",
        dark: "#FFFFFF",
        "bg-primary": "#FFFCF9",
        "bg-secondary": "#FFECDE",
      },
      gradients: "",
    },
  },
  plugins: [
    function ({ addUtilities, theme, e }) {
      const newUtilities = {
        [`.hover\\:to-primary-600:hover`]: {
          "--tw-gradient-to": theme("colors.primary.600"),
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
