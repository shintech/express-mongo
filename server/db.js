let User = require('./schemas/User')
const mongoose = require('mongoose')

const DB = process.env['MONGO_INITDB_DATABASE']
const URL = process.env['MONGO_URL']

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
