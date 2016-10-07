const tap  = require('ramda/src/tap')
const when = require('ramda/src/when')

const enabled = _ => localStorage.debug

const log = exports.log = tap(console.log.bind(console))

exports.debug = when(enabled, log)

