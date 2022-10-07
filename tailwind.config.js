module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
        tab: '870px',
      },
      boxShadow: {
        'card': '0 1px 5px rgba(0, 0, 0, 0.05)',
      },
      maxWidth: {
        '7xl': '1350px'
      },
      spacing: {
        '130px': '130px',
        '120px': '120px'
      },
      listStyleType: {
        circle: 'circle',
      }
    },
  },
  variants: {},
  plugins: [],
};
