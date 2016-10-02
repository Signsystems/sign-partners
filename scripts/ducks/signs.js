const assoc    = require('ramda/src/assoc')
const concat   = require('ramda/src/concat')
const flip     = require('ramda/src/flip')
const K        = require('ramda/src/always')
const inc      = require('ramda/src/inc')
const lensProp = require('ramda/src/lensProp')
const over     = require('ramda/src/over')
const p        = require('puddles')

const { cards, sizes } = require('../../data').signs

const ns = concat('sp/signs/')

const FILTER = ns('FILTER')
const MORE   = ns('MORE')
const SELECT = ns('SELECT')
const SHOW   = ns('SHOW')

const init = {
  active: cards[0],
  cards,
  category: 'all',
  fullscreen: false,
  pages: 1,
  sizes
}

const reducer = p.handle(init, {
  [ FILTER ]: flip(assoc('category')),
  [ MORE   ]: over(lensProp('pages'), inc),
  [ SELECT ]: flip(assoc('active')),
  [ SHOW   ]: flip(assoc('fullscreen'))
})

reducer.filter = p.action(FILTER)
reducer.hide   = K(p.action(SHOW, false))
reducer.more   = K(p.action(MORE, null))
reducer.select = p.action(SELECT)
reducer.show   = K(p.action(SHOW, true))

module.exports = reducer
