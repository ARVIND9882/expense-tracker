/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#00246B',
        lightBlue: '#CADCFC',
        darkPrimary: '#092635', // Dark teal
        darkSecondary: '#1B4242', // Deep green
        accent: '#5C8374', // Soft green
        lightAccent: '#9EC8B9', // Mint green
      },
    },
  },
  plugins: [],
}
