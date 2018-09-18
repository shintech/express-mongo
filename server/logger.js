const winston = require('winston')
const path = require('path')

module.exports = function ({ environment }) {
  let logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
      new winston.transports.File({ filename: path.join('server', 'log', 'error.log'), level: 'error' }),
      new winston.transports.File({ filename: path.join('server', 'log', 'combined.log') })
    ]
  })

  if (environment !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple()
    }))
  }

  return logger
}
