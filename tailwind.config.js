// tailwind.config.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./node_modules/preline/preline.js"],
  // Toggle dark-mode based on .dark class or data-mode="dark"
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", ...fontFamily.sans],
      },
    },
    colors: {
      "light-purple": "#A994FF",
      "dark-purple": "#4C20FE",
      "light-gray": "#2F2F30",
      "dark-gray": "#161517",
      white: "#FFFFFF",
      black: "#000000",
    },
  },
  plugins: [require("preline/plugin")],
};
