/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'gruvbox': {
          'bg': '#282828',
          'bg-dark': '#1d2021', 
          'fg': '#ebdbb2',
          'gray': '#928374',
          'red': '#cc241d',
          'green': '#98971a',
          'yellow': '#d79921',
          'blue': '#458588',
          'purple': '#b16286',
          'aqua': '#689d6a',
          'orange': '#d65d0e',
        },
      },
    },
  },
  plugins: [],
};
