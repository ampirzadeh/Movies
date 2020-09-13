module.exports = {
  transpileDependencies: ['vuetify'],
  publicPath:
    process.env.NODE_ENV === 'production'
      ? `/Movies/`
      : '/',
  pwa: {
    workboxOptions: {
      skipWaiting: true,
    },
    themeColor: '#777',
  },
}
