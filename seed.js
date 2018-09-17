#!/usr/bin/env node

const mongoose = require('mongoose')
const faker = require('faker')
let Post = require('./server/schemas/Post')
let connectionString = process.env['DATABASE_URL'] || 'mongodb://localhost/api_development'

function range (start, end) {
  if (start === end) return [start]
  return [start, ...range(start + 1, end)]
}

mongoose.connect(connectionString, { useNewUrlParser: true }, function (err, res) {
  if (err) {
    return console.log('Error: ' + err)
  } else {
    range(0, 12).map(f => {
      let post = new Post({
        title: faker.lorem.sentence(),
        summary: faker.lorem.sentences(),
        body: faker.lorem.paragraphs()
      })

      post.save(err => {
        if (err) throw new Error(err)
        mongoose.connection.close()
      })
    })

    console.log('Connected to database: ' + connectionString)
  }
})
