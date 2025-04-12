/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          customWhite: '#ffffff',  // Adicionando branco como "customWhite"
        },
      },
    },
    plugins: [],
  }
  