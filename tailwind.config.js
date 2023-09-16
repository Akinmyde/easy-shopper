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
    extend: {},
  },
  plugins: [],
};
