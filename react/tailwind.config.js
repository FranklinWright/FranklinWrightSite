/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#0f172a', // Deep slate background
        cardBg: '#1e293b', // Slightly lighter slate for cards
        accent: '#38bdf8', // Cool cyan accent
      }
    },
  },
  plugins: [],
}