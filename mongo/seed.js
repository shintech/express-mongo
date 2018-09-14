db.application.drop()
db.application.insertMany([
  {
    _id: 1,
    name: 'Tensor',
    phone: 6,
    email: 'test'
  },
  {
    _id: 2,
    name: 'Flow',
    phone: 10,
    email: 'test'
  }
])
