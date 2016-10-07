const p = require('puddles')

const data = require('../../data')

module.exports = page => p.handle(data[page], {})
