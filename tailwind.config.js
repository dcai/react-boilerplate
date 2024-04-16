/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.html"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: "#1B73E8",
      },
    },
    container: {
      center: true,
    },
  },
};
