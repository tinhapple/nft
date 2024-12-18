/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      screens: {
        md: '835px',
      },

      colors: {
        'primary': '#fff',
        'black': '#2B2B2B',
        'purple':"#A259FF",
        'grey':"#3B3B3B"
      },
      fontFamily: {
        wordSans: ['Work Sans', 'sans-serif'],
        spaceMono: ['Space Mono', 'monospace'],
      },
  
    },
  },
  plugins: [],
}

