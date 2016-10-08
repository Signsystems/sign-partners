const K = require('ramda/src/always')
const p = require('puddles')

const { select, zoom } = require('../ducks/fullscreen')

module.exports = card =>
  p('div.card', {
    key: card.image,
    on: { click: K(p.batch([ select(card.image), zoom(true) ])) },
    style: { backgroundImage: `url(${card.image})`, delayed: { opacity: 1 } }
  }, [
    p('div.aspect'),
    p('div.details', [
      p('h2.name', card.name),
      p('div.description', card.description)
    ]),
    p('i.fa.zoom.in')
  ])
