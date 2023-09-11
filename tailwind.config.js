/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-blue": "#1877f2"
      }
    },
    fontFamily: {
      sans: ['roboto', 'sans-serif'],
      'roboto': ['roboto'],
    },
    transitionProperty: {
      'left': 'left'
    }
  },
  plugins: [],
}

