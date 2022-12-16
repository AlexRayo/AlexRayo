/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
  theme: {
    extend: {
        boxShadow: {
            'solid-2xl' : '-25px 25px 0px rgba(0, 0, 0, 0.25)',
            'solid-3xl' : '-35px 35px 0px rgba(0, 0, 0, 0.25)',
        }
    },
  },
  plugins: [],
}
