const { respond } = require('../lib')

module.exports = function ({ db }) {
  return {
    fetchAll: async (req, res) => {
      db.User.find(function (err, users) {
        if (err) { return respond(res, 404, err) }

        respond(res, 200, users)
      })
    },

    fetchOne: async (req, res) => {
      db.User.findOne({ _id: req.params.id }, function (err, user) {
        if (err) { return respond(res, 404, err) }

        respond(res, 200, user)
      })
    },

    addUser: async (req, res) => {
      const attrs = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
      }
      let user = new db.User(attrs)

      user.save(err => {
        if (err) return res.send(err)
        res.send(user)
      })
    }
  }
}
