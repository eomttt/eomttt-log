/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'header': '64px',
      },
      padding: {
        'content': '76px',
      },
      maxWidth: {
        'content': '64rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
