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
        sans: ['var(--font-firacode)', ...fontFamily.sans]
      },
      colors: {
        // Configure your color palette here
        customBGColor: {
          light: '#F0EEED',
          DEFAULT: '#282c33',
          dark: '#282c33'
        },
        fontColorTitles: {
          light: '#332C39',
          DEFAULT: '#ffffff',
          dark: '#ffffff'
        },
        fontColor: {
          light: '#332C39',
          DEFAULT: '#abb2bf',
          dark: '#abb2bf'
        },
        purpleColor: {
          light: '#681f7c',
          DEFAULT: '#681f7c',
          dark: '#681f7c'
        },
        borderColor: {
          light: '#ABB2BF',
          DEFAULT: '#ABB2BF',
          dark: '#ABB2BF'
        }
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}
