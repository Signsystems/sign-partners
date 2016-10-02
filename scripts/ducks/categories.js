const assoc  = require('ramda/src/assoc')
const concat = require('ramda/src/concat')
const flip   = require('ramda/src/flip')
const p = require('puddles')

const { categories } = require('../../data').signs

const ns = concat('sp/categories/')

const SELECT = ns('SELECT')

const init = {
  active: categories[0],
  list:   categories
}

const reducer = p.handle(init, {
  [ SELECT ]: flip(assoc('active'))
})

reducer.select = p.action(SELECT)

module.exports = reducer
