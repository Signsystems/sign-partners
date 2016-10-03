const tap = require('ramda/src/tap')

exports.log = tap(console.log.bind(console))
