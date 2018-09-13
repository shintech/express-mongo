let User = require('./schemas/User')
const mongoose = require('mongoose')
let connectionString = process.env['DATABASE_URL'] || 'mongodb://localhost/api_development'

module.exports = ({ logger }) => {
  mongoose.connect(connectionString, { useNewUrlParser: true }, function (err, res) {
    if (err) {
      console.log('Error: ' + err)
    } else {
      console.log('Connected to database: ' + connectionString)
    }
  })

  let init = {
    User
  }

  return init
}
