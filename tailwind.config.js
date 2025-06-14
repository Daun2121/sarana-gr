/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        gendy: ["Gendy", "sans-serif"],
        monument: ["MonumentExtended", "sans-serif"],
      },
      fontWeight: {
        ultrabold: "800",
      },
      colors: {
        primary: "#00B4D8",
        secondary: "#202124",
      }
    },
  },
  plugins: [],
  experimental: {
    containerQueries: true,
  },
};
