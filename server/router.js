const routes = require('./routes')
const router = require('express').Router()

module.exports = function (config) {
  router.route('/users')
    .get(routes.users(config).fetchAll)
    .post(routes.users(config).addUser)

  router.route('/users/:id')
    .get(routes.users(config).fetchOne)

  return router
}
