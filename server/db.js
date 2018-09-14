let User = require('./schemas/User')
const mongoose = require('mongoose')

const DB = process.env['MONGO_INITDB_DATABASE']
const URL = process.env['MONGO_URL']
// const USERNAME = process.env['MONGO_INITDB_ROOT_USERNAME']
// const PASSWORD = process.env['MONGO_INITDB_ROOT_PASSWORD']

let connectionString = (process.env['MONGO_INITDB_DATABASE']) ? `mongodb://${URL}/${DB}` : 'mongodb://localhost/api_development'

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
