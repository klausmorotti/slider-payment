/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-screen': '#FAFAFA',
        'bg-methodPayment': '#E6E5E5'
      },
      maxWidth: {
        'sizeContainer': '800px',
      }
    }
  },
  plugins: [],
}
