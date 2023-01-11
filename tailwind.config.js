/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#DC5341",
        'bg': "#060606",
      },

      fontFamily: {
        'lexend': ["Lexend"],
        'cabinet': ["CabinetGrotesk"],
      },
    },
  },
  plugins: [],
}
