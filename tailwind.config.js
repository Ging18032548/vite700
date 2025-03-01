/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTitle: '#8B5DFF',
        primaryContent: '#FDB7EA',
        primarySubContent: '#441752',
        primaryBase: '#FFDCCC',
        primaryAccent: '#B771E5',
        primaryBg: '#FFF6E3',
      }
    },
  },
  plugins: [],
}

