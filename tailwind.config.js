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
    },
    boxShadow: {
      'postshadow': '0px 0px 10px 0px rgba(0,0,0,0.43)'
    }
  },
  plugins: [],
}

