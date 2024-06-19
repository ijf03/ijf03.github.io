/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        'lavender_blush': { DEFAULT: '#f6e8ea', 100: '#451b21', 200: '#8a3642', 300: '#c15f6e', 400: '#dca4ac', 500: '#f6e8ea', 600: '#f8edef', 700: '#faf2f3', 800: '#fcf6f7', 900: '#fdfbfb' }, 
        'bright_pink_(crayola)': { DEFAULT: '#ef626c', 100: '#3d060a', 200: '#7b0c13', 300: '#b8121d', 400: '#e92431', 500: '#ef626c', 600: '#f38188', 700: '#f6a0a6', 800: '#f9c0c4', 900: '#fcdfe1' }, 
        'licorice': { DEFAULT: '#120203', 100: '#040001', 200: '#070101', 300: '#0b0102', 400: '#0f0203', 500: '#120203', 600: '#6a0c12', 700: '#c31621', 800: '#eb4f59', 900: '#f5a7ac' }, 
        'dark_green': { DEFAULT: '#0d302b', 100: '#030a09', 200: '#051311', 300: '#081d1a', 400: '#0b2622', 500: '#0d302b', 600: '#20776a', 700: '#34bda8', 800: '#72d8c9', 900: '#b9ece4' }, 
        'tiffany_blue': { DEFAULT: '#84dccf', 100: '#0f3731', 200: '#1f6e62', 300: '#2ea593', 400: '#4dcdba', 500: '#84dccf', 600: '#9ce3d9', 700: '#b5eae2', 800: '#cef1ec', 900: '#e6f8f5' } }
    },
  },
  plugins: [],
}