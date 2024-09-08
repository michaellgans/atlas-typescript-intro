/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'main-background': '#edf7fd',
      'dark-main-background': '#041825',
      'player-background': '#B0E7FC',
      'dark-player-background': '#044862',
      'hover': '#76d4f9',
      'dark-hover': '#065575',
      'active': '#4fc8f8',
      'dark-active': '#076388',
      'text-color': '#03120e',
      'dark-text-color': '#eefcf8',
      'playing': '#27677C',
      'dark-playing': '#92cadd',
      'muted-text': '#5B4F7D',
      'dark-muted-text': '#c7c0d8'
    },
    extend: {
      height: {
        '400': '400px',
      },
      width: {
        '400': '400px',
      },
      maxWidth: {
        '400': '400px'
      }
    },
  },
  plugins: [],
}

