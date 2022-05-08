module.exports = {
  content: ['index.html'],
  darkMode:'class',
  theme: {
    container : {
      center : true,
      padding: '16px'
    },
    extend: {
      colors :{
      
      },
      screen:{
        '2xl' : '1320px', 
      },
    },
  },
  plugins: [require('daisyui')],
}
