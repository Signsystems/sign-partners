const compose = require('ramda/src/compose')
const p       = require('puddles')
const prop    = require('ramda/src/prop')
const split   = require('ramda/src/split')

const Fullscreen = require('./fullscreen')
const Header     = require('./header')
const { log }    = require('../lib/util')
const { paged }  = require('../lib/animations')

const key = compose(log, prop(1), split('/'))

module.exports = Child => state =>
  p('div.layout', {
    key: key(state.route.path),
    style: paged
  }, [
    Header(state),

    p('div.content', [
      Child(state)
    ]),

    state.route.params.id
      ? Fullscreen(state)
      : ''
  ])
