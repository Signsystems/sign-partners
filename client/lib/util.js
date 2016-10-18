const flip = require('ramda/src/flip')
const prop = require('ramda/src/prop')
const tap  = require('ramda/src/tap')
const when = require('ramda/src/when')

const enabled = () => localStorage.debug

const log = exports.log = tap(console.log.bind(console))

exports.debug = when(enabled, log)

exports.get = flip(prop)
