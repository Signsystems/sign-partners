const classnames = require('classnames')
const compose    = require('ramda/src/compose')
const filter     = require('ramda/src/filter')
const identity   = require('ramda/src/identity')
const m          = require('mithril')
const propEq     = require('ramda/src/propEq')
const take       = require('ramda/src/take')

const Card = require('./card')
const Fullscreen = require('./fullscreen')
const { cards, categories, sizes } = require('../data').signs

const categorize = compose(filter, propEq('category'))

function size(width) {
  return sizes.find(config => config.width <= width).size
}

exports.oninit = function(vnode) {
  vnode.state = {
    category:   m.prop(categories[0]),
    fullscreen: m.prop(cards[0]),
    pages:      m.prop(1)
  }
}

exports.view = function(vnode) {
  const { category, fullscreen, pages } = vnode.state,
        total = pages() * size(document.body.clientWidth)

  const select = category() === 'all' ? identity : categorize(category())

  return [
    m('nav.categories.row', [
      categories.map(name =>
        m('.category', {
          className: classnames({ active: category() === name }),
          onclick: category.bind(null, name)
        }, name)
      )
    ]),

    m('.cards.row', take(total, select(cards)).map((card, key) =>
      m(Card, { card, fullscreen, key })
    )),

    m('button.more', {
      className: classnames({ hide: total >= select(cards).length }),
      onclick: pages.bind(null, pages() + 1) },
    'Show more'),

    m(Fullscreen, { fullscreen })
  ]
}
