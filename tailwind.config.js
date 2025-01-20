/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blue': 'linear-gradient(135deg, #5a86dc, #76d5be)',
        'yellow': 'linear-gradient(135deg, #d4a514, #f59e0b)',
        'grayscale': 'linear-gradient(135deg, #3b3b3b, #1a1a1a)',
        'purple': 'linear-gradient(135deg, #4b0082, #7a1fa2)',
        'green': 'linear-gradient(160deg, #d8ea7b, #4aae66)',
      },
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}