/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        isauwRed: "#7d0000",
        isauwCreme: "#FEFDEA",
      },
      fontFamily: {
        spartan: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
