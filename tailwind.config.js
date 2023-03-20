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
          light: '#202329',
          DEFAULT: '#202329',
          dark: '#202329'
        },
        fontColor: {
          light: '#B9B3AA',
          DEFAULT: '#B9B3AA',
          dark: '#B9B3AA'
        },
        purpleColor: {
          light: '#681f7c',
          DEFAULT: '#681f7c',
          dark: '#681f7c'
        }
      }
    }
  },
  plugins: []
}
