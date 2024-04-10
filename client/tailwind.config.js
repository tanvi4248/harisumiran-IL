/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#fff7ea",
      secondary: "#ebdac5",
    }),
    fontFamily: {
      body: ["Open Sans"],
    },
    extend: {},
  },
  plugins: [],
};
