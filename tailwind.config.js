/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Helvetica", "Arial", "sans-serif"],

      // Comma-delimited format:
      sans: "Helvetica, Arial, sans-serif",
    },
    container: {
      center: true,
      padding: "2rem",
      maxWidth: "150px",
    },
    extend: {},
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: {
        900: "#030303",
        100: "#262626",
        normal: "#000000",
      },
      blue: "#3164f4",
      gray: {
        300: "#d9d9d9",
        200: "#7f7f7f",
        100: "#4f4f4f",
      },
    },
  },
  plugins: [],
};
