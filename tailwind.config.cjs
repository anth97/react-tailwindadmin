/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          ...defaultTheme.fontFamily.sans,
        ]
      },
      colors: {
        'person-theme-gray': '#F2EFEA',
        'person-theme-orange': '#FC7753',
        'person-theme-blue': '#66D7D1',
        'person-theme-purple': '#403D58',
        'person-theme-yellow': '#DBD56E'
      }
    },
  },
  plugins: [],
}
