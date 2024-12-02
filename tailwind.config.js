/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        "teal": '#008080', // Teal
        "primary-green": "#002424", //special green
        "soft-coral": '#F28C8C', // Soft Coral
        "Grey": '#838383', // Grey
        "light-bg": '#f8f9fa', // Light mode background
        "dark-bg": '#121212', // Dark mode background
      },
      backgroundColor: {
        "light-bg": '#f8f9fa', // Light mode background
        "dark-bg": '#121212', // Dark mode background
      },
      screens: {
        'sm': '640px',  // Small: for small phones or portrait tablets
        'md': '768px',  // Medium: for tablets or smaller laptops
        'lg': '1024px', // Large: for standard laptops and larger tablets
        'xl': '1280px', // Extra Large: for large desktops or high-resolution laptops
        '2xl': '1536px',// 2x Extra Large: for ultra-wide or very high-resolution monitors
      },
      
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        secondary: ['Merriweather', 'serif'],
        fallback: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
