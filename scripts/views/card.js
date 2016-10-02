const K = require('ramda/src/always')
const p = require('puddles')

const { select, show } = require('../ducks/signs')

module.exports = card =>
  p('div.card', {
    on: { click: K(p.batch([ select(card), show() ])) },
    style: { backgroundImage: `url(${card.image})` }
  }, [
    p('div.aspect'),
    p('div.details', [
      p('h2.name', card.name),
      p('div.description', card.description)
    ]),
    p('i.fa.zoom')
  ])
