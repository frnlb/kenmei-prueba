/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,tsx}"],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
          },
          colors: {
            'primary': '#00AEEA',
            'green': '#A8F1C0',
            'white': '#fff',
          },
          fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
          },
          extend: {
            spacing: {
              '128': '32rem',
              '144': '36rem',
            },
            borderRadius: {
              '4xl': '2rem',
            }
          }
    },
    plugins: [],
  }