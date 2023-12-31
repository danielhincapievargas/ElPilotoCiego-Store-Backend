const productsRoutes = require('./api/products')
const usersRoutes = require('./api/users')
const ordersRoutes = require('./api/orders')
const authLocalRoutes = require('./auth/local')
const checkoutRoutes = require('./api/checkout')

const routes = (app) => {
  app.use('/api/products', productsRoutes)
  app.use('/api/users', usersRoutes)
  app.use('/api/orders', ordersRoutes)

  //Auth
  app.use('/auth/local', authLocalRoutes)

  //checkout
  app.use('/api/checkout', checkoutRoutes)
}

module.exports = routes