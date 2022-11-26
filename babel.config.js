/* eslint-disable no-undef */
module.exports = {
  presets: [
    [
      '@vue/app',
      {
        polyfills: ['es.promise', 'es.symbol']
      }
    ]
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
};
