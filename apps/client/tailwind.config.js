export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {},
    screens: {
      'xl': {
        max: '1400px'
      },
      'xl-s1': {
        max: '1279px'
      },
      'lg': {
        max: '1023px'
      },
      'lg-s1': {
        max: '830px'
      },
      'md': {
        max: '767px'
      },
      'md-s1': {
        max: '530px'
      },
      'sm': {
        max: '639px'
      }
    }
  },
  plugins: []
}
