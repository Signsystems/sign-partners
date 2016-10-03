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

const SELECT_CARD  = ns('SELECT_CARD')
const SET_CATEGORY = ns('SET_CATEGORY')
const SHOW_MORE    = ns('SHOW_MORE')
const ZOOM         = ns('ZOOM')

const init = {
  active: cards[0],
  cards,
  category: 'all',
  fullscreen: false,
  pages: 1,
  sizes
}

const reducer = p.handle(init, {
  [ SELECT_CARD  ]: flip(assoc('active')),
  [ SET_CATEGORY ]: flip(assoc('category')),
  [ SHOW_MORE    ]: over(lensProp('pages'), inc),
  [ ZOOM         ]: flip(assoc('fullscreen'))
})

reducer.selectCard  = p.action(SELECT_CARD)
reducer.setCategory = p.action(SET_CATEGORY)
reducer.showMore    = K(p.action(SHOW_MORE, null))
reducer.zoom        = p.action(ZOOM)

module.exports = reducer
