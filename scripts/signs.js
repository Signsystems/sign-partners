const Emitter = require('eventemitter3');
const m = require('mithril');

const Card       = require('./card');
const Fullscreen = require('./fullscreen');
const { signs }  = require('../data');

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
    events: new Emitter,
    pages:  1,

    more() {
      ctrl.pages++;
    }
  };

  return ctrl;
};

exports.view = function(ctrl, args, extras) {
  var { events } = ctrl,
      total = ctrl.pages * pageSize();

  return [
    m('nav.categories.row', [
      m('.category.active', 'All'),
      signs.categories.map(name =>
        m('.category', name)
      )
    ]),

    m('.cards.row', signs.cards.slice(0, total).map(card =>
      m(Card, { card, events })
    )),

    total < signs.cards.length
      ? m('button.more', { onclick: ctrl.more }, 'Show more')
      : null,

    m(Fullscreen, { events })
  ];
};

function pageSize() {
  var width = document.body.clientWidth;
  return sizes.find(config => config.width <= width).size;
}
