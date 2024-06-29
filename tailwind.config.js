/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 'dark_tiffany_blue': { DEFAULT: '#8fd8c1', 100: '#13352a', 200: '#256a54', 300: '#389f7e', 400: '#59c5a3', 500: '#8fd8c1', 600: '#a4dfcd', 700: '#bbe7d9', 800: '#d2efe6', 900: '#e8f7f2' }, 
      'light_tiffany_blue': { DEFAULT: '#b3e5d4', 100: '#153d2f', 200: '#2a7a5f', 300: '#3eb68e', 400: '#76d0b2', 500: '#b3e5d4', 600: '#c2eadd', 700: '#d1efe5', 800: '#e1f5ee', 900: '#f0faf6' }, 
      'mauve': { DEFAULT: '#c4b3f9', 100: '#19064f', 200: '#310d9f', 300: '#4b15ec', 400: '#8864f2', 500: '#c4b3f9', 600: '#d0c3fa', 700: '#dcd2fb', 800: '#e8e1fd', 900: '#f3f0fe' }, 
      'apricot': { DEFAULT: '#fcd4b5', 100: '#532603', 200: '#a64c07', 300: '#f5730f', 400: '#f8a362', 500: '#fcd4b5', 600: '#fdddc4', 700: '#fde5d3', 800: '#feeee2', 900: '#fef6f0' }, 'peach': { DEFAULT: '#fac190', 100: '#4b2504', 200: '#964a07', 300: '#e16f0b', 400: '#f69744', 500: '#fac190', 600: '#fbcda5', 700: '#fcdabc', 800: '#fde6d2', 900: '#fef3e9' } }
    },
  },
  plugins: [],
}