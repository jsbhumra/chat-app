/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'in-3xl': 'inset 35px -35px 34px #cacaca, inset -35px 35px 34px #f6f6f6',
        'in': 'inset 0 70px 30.5px -40px #cacaca',
        'in-2': 'inset 0 50px 40.5px -40px #cacaca, inset 0 -50px 40.5px -40px #cacaca',
        'in-3xl-2': 'inset -35px -35px 34px #cacaca, inset 35px 35px 34px #f6f6f6',
      }
    },
  },
  plugins: [],
}

