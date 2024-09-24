/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{vue,js,ts}',
  ],
  theme: {
    colors:{
      primary: '#c0c0c0',
      secondary: '#000000'
    },
    container:{
      center: true,
      padding: '1rem',
    },
    screens:{
      'desktop': '1440px',
      'tablet': '768px',
      'mobile': '640px'
    }
  },
  plugins: [],
}

