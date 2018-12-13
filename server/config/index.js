
const env = process.APP_ENV || 'development'

const config = require(`./${env}`)

module.exports = config
