// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Ensure this covers your file paths
  ],
  theme: {
    extend: {
      colors: {
        background: 'bg-gray-900', // Dark background
        text: 'text-gray-200', // Light text color
        'light-background': 'bg-white', // Light background
        'light-text': 'text-gray-900', // Dark text for light theme
      },
    },
  },
  darkMode: 'class', // Enable dark mode by class
  plugins: [],
};
