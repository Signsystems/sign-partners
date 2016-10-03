const assoc    = require('ramda/src/assoc')
const concat   = require('ramda/src/concat')
const flip     = require('ramda/src/flip')
const inc      = require('ramda/src/inc')
const lensProp = require('ramda/src/lensProp')
const over     = require('ramda/src/over')
const p        = require('puddles')

const { cards, sizes } = require('../../data').signs

const ns = concat('sp/signs/')

const RESIZE       = ns('RESIZE')
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
  pageSize: 0
}

const size = width =>
  sizes.find(config => config.width <= width).size

const reducer = p.handle(init, {
  [ RESIZE       ]: (state, width) => assoc('pageSize', size(width), state),
  [ SELECT_CARD  ]: flip(assoc('active')),
  [ SET_CATEGORY ]: flip(assoc('category')),
  [ SHOW_MORE    ]: over(lensProp('pages'), inc),
  [ ZOOM         ]: flip(assoc('fullscreen'))
})

reducer.resize      = p.action(RESIZE)
reducer.selectCard  = p.action(SELECT_CARD)
reducer.setCategory = p.action(SET_CATEGORY)
reducer.showMore    = p.action(SHOW_MORE)
reducer.zoom        = p.action(ZOOM)

module.exports = reducer
