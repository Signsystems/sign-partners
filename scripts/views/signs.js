const append  = require('ramda/src/append')
const compose = require('ramda/src/compose')
const filter  = require('ramda/src/filter')
const I       = require('ramda/src/identity')
const p       = require('puddles')
const pluck   = require('ramda/src/pluck')
const propEq  = require('ramda/src/propEq')
const sortBy  = require('ramda/src/sortBy')
const T       = require('ramda/src/T')
const take    = require('ramda/src/take')
const uniq    = require('ramda/src/uniq')

const Card      = require('./card')
const Footer    = require('./footer')
const { paged } = require('../lib/animations')
const { setCategory, showMore, zoom } = require('../ducks/signs')

const byCategory = name =>
  name === 'all' ? T : propEq('category', name)

const categories = compose(sortBy(I), append('all'), uniq, pluck('category'))

module.exports = state => {
  const { active, cards, category, fullscreen, page, pages } = state,
        total = pages * page.size

  const select = filter(byCategory(category)),
        limit  = compose(take(total), select)

  return p('div.signs', [
    p('nav.categories.row', categories(cards).map(name =>
      p('div.category', {
        class: { active: category === name },
        on: { click: [ setCategory, name ] }
      }, name)
    )),

    p('div.content', [
      p('div.page', { key: category, style: paged }, [
        p('div.cards.row', limit(cards).map(Card)),

        p('button.more', {
          class: { hidden: total >= select(cards).length },
          on: { click: showMore }
        }, 'Show more'),

        Footer()
      ])
    ]),

    p('div.fullscreen', [
      p('div.image', {
        class: { show: fullscreen },
        on: { click: [ zoom, false ] },
        style: { backgroundImage: `url(${active.image})` }
      })
    ])
  ])
}
