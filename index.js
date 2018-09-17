const environment = process.env['NODE_ENV']
const port = process.env['PORT'] || 8000

const logger = require('./server/logger')({ environment })
const server = require('./server')({ logger, environment, port })

server.listen(port, () => {
  logger.info(`listening on port ${port}...`)
})
