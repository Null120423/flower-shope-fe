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
        // Generated range for base color ##F15493
        primary: "#F15493",
        // Generated range for base color #FFFFFF
        secondary: "#FFECDE",
        light: "#F15493",
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
