function respond (res, status, response) {
  res.status(status)
    .format({
      json: () => {
        res.write(JSON.stringify(response))
        res.end()
      }
    })
}

module.exports = {
  respond
}
