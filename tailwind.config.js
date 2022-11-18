/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
      ],
  theme: {
    extend: {
        colors: {
            primary: '#1c1c1c',
            secondary: {
                100: 'white',
                200: '#f1f1f1',
            }

        },
        //*** customFonts ***
        // fontFamily: {
        //     primaryFont: ['Lato']
        // }
    },
  },
  plugins: [],
}