/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B0C10",
        primaryBg: "#28303D",
        secondary: "#1F2833",
        text: "#B5CDF5",
        link: "#2DD2BE",
        border: "#2B7299"
      }
    }
  },
  plugins: [],
}