/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
            'orange-brastemp': '#ff5000',
          },
      },
    },
    plugins: [require("daisyui")],
  }