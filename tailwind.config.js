/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',      
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        gray: {
          700: 'hsl(0, 0%, 20%)',
          800: 'hsl(0, 0%, 12%)',
          900: 'hsl(0, 0%, 8%)'
        },
        green: 'hsl(75, 94%, 57%)'
      }
    },
  },
  plugins: [],
}