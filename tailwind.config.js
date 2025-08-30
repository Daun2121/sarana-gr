/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        ultrabold: "800",
      },
      colors: {
        primary: "#00B4D8",
        secondary: "#202124",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0%"},
          "100%": { opacity: "100%"}
        }
      },
      animation: {
        fadeIn: "fadeIn "
      }
    },
  },
  plugins: [],
  experimental: {
    containerQueries: true,
  },
};
