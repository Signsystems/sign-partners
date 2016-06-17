const m = require('mithril');

const Card = require('./card');
const { signs } = require('../data');

exports.view = function(ctrl, { events }, extras) {
  return [
    m('nav.categories.row', [
      m('.category.active', 'All'),
      signs.categories.map(name =>
        m('.category', name)
      )
    ]),

    m('.cards.row', signs.cards.map(card =>
      m(Card, { card, events })
    ))
  ];
}
