/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // brand colours pulled from their actual site identity
      colors: {
        brand: {
          cyan: "#29A8C4",
          "cyan-soft": "#6FD0E3",
          charcoal: "#0C0E10",
          "char-mid": "#14181C",
          silver: "#E8ECEF",
          "silver-light": "#F5F7F8",
          ocean: "#06253A",
        },
      },
      fontFamily: {
        display: ["Outfit", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
