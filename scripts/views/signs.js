const append  = require('ramda/src/append')
const compose = require('ramda/src/compose')
const I       = require('ramda/src/identity')
const p       = require('puddles')
const pluck   = require('ramda/src/pluck')
const sortBy  = require('ramda/src/sortBy')
const uniq    = require('ramda/src/uniq')

const Card = require('./card')
const { filter, hide } = require('../ducks/signs')

const categories = compose(sortBy(I), append('all'), uniq, pluck('category'))

const size = (sizes, width) =>
  sizes.find(config => config.width <= width).size

module.exports = ({ active, cards, category, fullscreen, pages }) =>
  p('div.signs', [
    p('nav.categories.row', categories(cards).map(name =>
      p('div.category', {
        class: { active: category === name },
        on: { click: [ filter, name ] }
      }, name)
    )),

    p('div.cards.row', cards.map(Card)),

    p('div.fullscreen', [
      p('div.image', {
        class: { show: fullscreen },
        on: { click: hide },
        style: { backgroundImage: `url(${active.image})` }
      })
    ])
  ])
