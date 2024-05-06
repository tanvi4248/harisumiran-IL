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
      title: "#712026",
      footer: "#6d7f9a",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      primary: "#aa5d27",
      secondary: "#d06b23",
      title: "#712026",
    }),
    container: {
      center: true,
    },
    fontFamily: {
      body: ["Poppins"],
      display: ["Playfair Display"],
    },
    fontWeight: {
      bold: 700,
      medium: 500,
    },
    extend: {},
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme("fontSize.2xl"),
          fontWeight: theme("fontWeight.bold"), // Adding font weight to h1
        },
        h2: {
          fontSize: theme("fontSize.xl"),
          fontWeight: theme("fontWeight.bold"),
        },
        h3: {
          fontSize: theme("fontSize.lg"),
          fontWeight: theme("fontWeight.bold"),
        },
      });
    },
  ],
};
