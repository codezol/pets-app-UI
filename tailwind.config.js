/** @type {import('tailwindcss').Config} */
function dynamicHsl(h, s, l) {
  return ({ opacityVariable, opacityValue }) => {
      if (opacityValue !== undefined) {
          return `hsla(${h}, ${s}, ${l}, ${opacityValue})`
      }
      if (opacityVariable !== undefined) {
          return `hsla(${h}, ${s}, ${l}, var(${opacityVariable}, 1))`
      }
      return `hsl(${h}, ${s}, ${l})`
  }
}

module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        "pale-violet" : '#d89eff',
        "moderate-violet" : 'hsl(276, 55%, 52%)',
        "desaturated-dark-violet" : 'hsla(271, 15%, 43%,0.05)',
        "grayish-blue" : 'hsl(206, 6%, 79%)',
        "very-dark-desaturated-violet": 'hsl(271, 36%, 24%)',
        "dark-grayish-violet": 'hsl(270, 7%, 64%)',
        'light-grayish-violet':' hsl(270, 20%, 96%)',
        'very-dark-desaturated' : 'hsl(271, 36%, 24%)',
        'very-light-magenta' : 'hsl(289, 100%, 72%)',
        'light-magenta': 'hsl(293, 100%, 63%)',
        'light-violet': 'hsl(264, 100%, 61%)',
      },  
       fontFamily: {
        'rubik': ['Rubik'],
      },
      fontSize : {
        '2xs' : '0.6rem'
      }, 
      maxWidth: {
        '9': '9rem',
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      height : {
        '1.4screen' : '140vh',
        '120' : '38rem'
      },
      width : {
        '0.7' : '70%',
        '0.8' : '80%',
        '110' : '28rem',
        '70'  : '16rem',
        '80' : '25rem'
      },
      minwidth : {
        '70'  : '16rem'
      }

    },
  },
  plugins: [],
}

