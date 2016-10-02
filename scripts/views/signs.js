const p = require('puddles')

const Categories = require('./categories')

module.exports = ({ categories }) =>
  p('div.signs', [
    Categories(categories),

    p('div.cards.row')
  ])
