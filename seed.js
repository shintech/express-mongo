const mongoose = require('mongoose')
const faker = require('faker')
let User = require('./server/schemas/User')
let connectionString = process.env['DATABASE_URL'] || 'mongodb://localhost/api_development'

function range (start, end) {
  if (start === end) return [start]
  return [start, ...range(start + 1, end)]
}

mongoose.connect(connectionString, { useNewUrlParser: true }, function (err, res) {
  if (err) {
    return console.log('Error: ' + err)
  } else {
    range(0, 35).map(f => {
      let user = new User({
        name: faker.name.findName(),
        phone: faker.phone.phoneNumber(),
        email: faker.internet.exampleEmail()
      })

      user.save(err => {
        if (err) throw new Error(err)
        mongoose.connection.close()
      })
    })

    console.log('Connected to database: ' + connectionString)
  }
})
