const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', ...fontFamily.sans]
      },
      colors: {
        // Configure your color palette here
        customBGColor: {
          light: '#112240',
          DEFAULT: '#282c33',
          dark: '#282C33'
        },
        fontColorTitles: {
          light: '#332C39',
          DEFAULT: '#ffffff',
          dark: '#ccd6f6'
        },
        fontColor: {
          light: '#332C39',
          DEFAULT: '#abb2bf',
          dark: '#8892b0'
        },
        purpleColor: {
          light: '#64ffda',
          DEFAULT: '#64ffda',
          dark: '#64ffda'
        },
        borderColor: {
          light: '#ABB2BF',
          DEFAULT: '#ABB2BF',
          dark: '#8892b0'
        }
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}
