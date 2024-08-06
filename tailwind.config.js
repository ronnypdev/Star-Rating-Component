/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        DMsans: ["Merriweather", "serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        startYellow: "var(--star-yellow)",
        darkBlue: "var(--dark-blue)",
        darkGray: "var(--dark-gray)",
        paleBlue: "var(--pale-blue)",
      }
    },
  },
  plugins: [],
}

