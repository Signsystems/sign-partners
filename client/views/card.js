const kebabCase = require('lodash/kebabCase')
const p = require('puddles')

const slug = card =>
  `${card.id}-${kebabCase(card.name)}`

module.exports = basePath => card =>
  p('a.card', {
    key: card.id,
    attrs: {
      href: p.href(`${basePath}/${slug(card)}`),
      title: card.id
    },
    style: {
      backgroundImage: `url(${card.src})`,
      delayed: { opacity: 1 }
    }
  }, [
    p('div.aspect'),
    p('div.details', [
      p('h2.name', card.name),
      p('div.description', card.description)
    ]),
    p('i.fa.zoom.in')
  ])
