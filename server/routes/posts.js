const { respond } = require('../lib')

module.exports = function () {
  return {
    fetchAll: async (req, res) => {
      const { db } = req

      db.Post.find(function (err, posts) {
        if (err) { return respond(res, 404, err) }

        respond(res, 200, posts)
      })
    },

    fetchOne: async (req, res) => {
      const { db } = req

      db.Post.findOne({ _id: req.params.id }, function (err, post) {
        if (err) { return respond(res, 404, err) }

        respond(res, 200, post)
      })
    },

    addPost: async (req, res) => {
      const { db } = req

      const attrs = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
      }

      let post = new db.Post(attrs)

      post.save(err => {
        if (err) return res.send(err)
        res.send(post)
      })
    }
  }
}
