const K = require('ramda/src/always')
const p = require('puddles')

const { select, zoom } = require('../ducks/fullscreen')

module.exports = card =>
  p('div.card', {
    key: card.id,
    attrs: { title: card.id },
    on: { click: K(p.batch([ select(card.src), zoom(true) ])) },
    style: { backgroundImage: `url(${card.src})`, delayed: { opacity: 1 } }
  }, [
    p('div.aspect'),
    p('div.details', [
      p('h2.name', card.name),
      p('div.description', card.description)
    ]),
    p('i.fa.zoom.in')
  ])
