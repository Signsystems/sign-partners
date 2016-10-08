const assoc  = require('ramda/src/assoc')
const concat = require('ramda/src/concat')
const flip   = require('ramda/src/flip')
const p      = require('puddles')

const ns = concat('sp/fullscreen/')

const SELECT = ns('SELECT')
const ZOOM   = ns('ZOOM')

const init = {
  image: '',
  show: false
}

const reducer = p.handle(init, {
  [ SELECT ]: flip(assoc('image')),
  [ ZOOM   ]: flip(assoc('show'))
})

reducer.select = p.action(SELECT)
reducer.zoom   = p.action(ZOOM)

module.exports = reducer
