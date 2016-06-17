const m = require('mithril');

const fullscreen = require('./fullscreen');
const { signs }  = require('../data');

exports.view = function(ctrl, args, extras) {
  return [
    m('nav.categories.row', [
      m('.category.active', 'All'),
      signs.categories.map(name =>
        m('.category', name)
      )
    ]),

    m('.cards.row', signs.cards.map(card =>
      m('.card', { onclick: fullscreen }, [
        m('.aspect'),
        m('.details', [
          m('h2.name', card.name),
          m('.description', card.description)
        ]),
        m('i.fa.zoom')
      ])
    ))
  ];
}
