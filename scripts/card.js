const m = require('mithril');

exports.view = function({ attrs }) {
  const { card, fullscreen } = attrs

  return m('.card', {
    onclick: fullscreen.bind(null, card),
    style: `background-image: url(${card.image});`
  }, [
    m('.aspect'),
    m('.details', [
      m('h2.name', card.name),
      m('.description', card.description)
    ]),
    m('i.fa.zoom')
  ])
}
