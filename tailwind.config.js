/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
            'red-bg': '#e90313',
          },
      },
    },
    plugins: [require("daisyui")],
  }