const m = require('mithril');

const Card = require('./card');
const { signs } = require('../data');

var sizes = [
  {
    width: 769,
    size: 12
  },
  {
    width: 481,
    size: 8,
  },
  {
    width: 0,
    size: 6
  }
];

exports.controller = function(args, extras) {
  var ctrl = {
    pages: m.prop(1)
  };

  return ctrl;
};

exports.view = function(ctrl, { events }, extras) {
  var total = ctrl.pages() * pageSize();

  return [
    m('nav.categories.row', [
      m('.category.active', 'All'),
      signs.categories.map(name =>
        m('.category', name)
      )
    ]),

    m('.cards.row', signs.cards.slice(0, total).map(card =>
      m(Card, { card, events })
    ))
  ];
};

function pageSize() {
  var width = document.body.clientWidth;
  return sizes.find(config => config.width <= width).size;
}
