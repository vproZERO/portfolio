/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#070B17",
        primaryBg: "#28303D",
        secondary: "#111828",
        text: "#B5CDF5",
        link: "#2DD2BE",
        border: "#2B7299"
      }
    }
  },
  plugins: [],
}