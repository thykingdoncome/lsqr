const defaultTheme = require('tailwindcss/defaultTheme')
const windmill = require('@windmill/react-ui/config')

module.exports = windmill({
  purge: ['src/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        bottom: '0 5px 6px -7px rgba(0, 0, 0, 0.6), 0 2px 4px -5px rgba(0, 0, 0, 0.06)',
      },
      textColor: theme => theme('colors'),
      textColor: {
       'primary': '#213F7D',
       'secondary': '#39CDCC',
       'simple': '#545F7D',
       'star-yellow': '#E9B200',
       'hot-red': '#F55F44',
       'active-green': '#39CD62',
       'pale-purple': '#545F7D'
     },
     backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#213F7D',
      'secondary': '#39CDCC',
      'simple': '#545F7D',
      'star-yellow': '#E9B200',
      'hot-red': '#F55F44',
      'active-green': '#39CD62',
      'pale-purple': '#545F7D'
     })
    },
  },
})
