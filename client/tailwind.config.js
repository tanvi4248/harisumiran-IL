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
      title: "#6d7f9a",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      primary: "#edc386",
    }),
    fontFamily: {
      body: ["Poppins"],
    },
    fontWeight: {
      bold: 700,
    },
    extend: {},
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.2xl") },
        h2: { fontSize: theme("fontSize.xl") },
        h3: { fontSize: theme("fontSize.lg") },
      });
    },
  ],
};
