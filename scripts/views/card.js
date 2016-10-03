const K = require('ramda/src/always')
const p = require('puddles')

const { selectCard, zoom } = require('../ducks/signs')

module.exports = card =>
  p('div.card', {
    key: card.image,
    on: { click: K(p.batch([ selectCard(card), zoom(true) ])) },
    style: { backgroundImage: `url(${card.image})` }
  }, [
    p('div.aspect'),
    p('div.details', [
      p('h2.name', card.name),
      p('div.description', card.description)
    ]),
    p('i.fa.zoom')
  ])
