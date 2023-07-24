/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'first-color': '#222223',
        'second-color': '#756B6B',
        'third-color': '#FF843F',
        'section-color': '#D9D9D9',
        'text-color': '#FFFFFF',
      },
      fontFamily: {
        heading1: ['Prosto One','sans-serif'],
        body: ['Open Sans', 'sans-serif']
        // 'custom' here is the name you'll use to reference the font in your HTML/CSS
      },
      fontSize: {
        'large': '128px',
        'main': '32px', // You can give a custom name to the size (3xl) and set its value in rem, px, em, etc.
        'sub': '16px',
        'normal': '16px',
      },
    },
  },
  plugins: [],
}