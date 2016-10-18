const p = require('puddles')

module.exports = basePath => card =>
  p('a.card', {
    key: card.id,
    attrs: { href: p.href(`${basePath}/${card.id}`), title: card.id },
    style: { backgroundImage: `url(${card.src})`, delayed: { opacity: 1 } }
  }, [
    p('div.aspect'),
    p('div.details', [
      p('h2.name', card.name),
      p('div.description', card.description)
    ]),
    p('i.fa.zoom.in')
  ])
