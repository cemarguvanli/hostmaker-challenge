/* eslint-disable */
module.exports = {
  parser: false,
  plugins: {
    'postcss-preset-env': {},
    'postcss-cssnext': {
      browsers: ['last 10 versions', '> 1%'],
    },
    'cssnano':  {}
  }
};
