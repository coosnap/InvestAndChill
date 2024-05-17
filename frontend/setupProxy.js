const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = app => {
  app.use(
    createProxyMiddleware('/connect/token',
      {
        target: 'https://agile-bayou-65029-c59bb8376f70.herokuapp.com/',
        changeOrigin: true
      }
    )
  )
}