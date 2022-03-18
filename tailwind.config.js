module.exports = {
  darkMode: 'class',
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        alegreya: ['Alegreya']
      },
      colors: {
        darkBlue: {
          800: '#1d3149',
          700: '#2c496d',
          600: '#3a6292',
          500: '#497ab6',
          400: '#6d95c5',
          200: '#b6cae2',
        },
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
      },    
    },
    screen: {
      'mobile': '240px'
    }
  },
  plugins: [],
}
