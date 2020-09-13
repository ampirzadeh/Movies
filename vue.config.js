module.exports = {
  transpileDependencies: ['vuetify'],
  publicPath:
    process.env.NODE_ENV === 'production'
      ? `/${process.env.npm_package_name}/`
      : '/',
  pwa: {
    workboxOptions: {
      skipWaiting: true,
    },
  },
}
