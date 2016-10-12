const append   = require('ramda/src/append')
const compose  = require('ramda/src/compose')
const contains = require('ramda/src/contains')
const filter   = require('ramda/src/filter')
const flatten  = require('ramda/src/flatten')
const I        = require('ramda/src/identity')
const p        = require('puddles')
const pluck    = require('ramda/src/pluck')
const prop     = require('ramda/src/prop')
const sortBy   = require('ramda/src/sortBy')
const T        = require('ramda/src/T')
const take     = require('ramda/src/take')
const uniq     = require('ramda/src/uniq')

const Card      = require('./card')
const Footer    = require('./footer')
const Layout    = require('./layout')
const { paged } = require('../lib/animations')
const { setTag, showMore } = require('../ducks/signs')

const byTag = name =>
  name === 'all' ? T : compose(contains(name), prop('tags'))

const tags = compose(sortBy(I), append('all'), uniq, flatten, pluck('tags'))

const Signs = ({ signs }) => {
  const { cards, tag, page, pages } = signs,
        total = pages * page.size

  const select = filter(byTag(tag)),
        limit  = compose(take(total), select)

  return p('div.signs.page', { style: paged }, [
    p('nav.tags.row', tags(cards).map(name =>
      p('div.tag', {
        class: { active: tag === name },
        on: { click: [ setTag, name ] }
      }, name)
    )),

    p('div.content', [
      p('div.page', { key: tag, style: paged }, [
        p('div.cards.row', limit(cards).map(Card)),

        p('button.more', {
          class: { hidden: total >= select(cards).length },
          on: { click: showMore }
        }, 'Show more'),

        Footer()
      ])
    ])
  ])
}

module.exports = Layout(Signs)
