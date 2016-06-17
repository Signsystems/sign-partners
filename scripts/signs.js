const classnames = require('classnames');
const Emitter = require('eventemitter3');
const filter  = require('lodash/filter');
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
    category: m.prop('all'),
    events: new Emitter,
    pages:  1,

    cards() {
      var category = ctrl.category();
      return category === 'all'
        ? signs.cards
        : filter(signs.cards, { category });
    },

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
      signs.categories.map(name =>
        m('.category', {
          className: classnames({ active: ctrl.category() === name }),
          onclick: ctrl.category.bind(null, name)
        }, name)
      )
    ]),

    m('.cards.row', ctrl.cards().slice(0, total).map((card, key) =>
      m(Card, { card, events, key })
    )),

    total < ctrl.cards().length
      ? m('button.more', { onclick: ctrl.more }, 'Show more')
      : null,

    m(Fullscreen, { events })
  ];
};

function pageSize() {
  var width = document.body.clientWidth;
  return sizes.find(config => config.width <= width).size;
}
